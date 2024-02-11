import { prisma } from '@/lib/prisma';
import { SalesEntry } from '@/prisma/generated/client';
import { addCustomer } from './create-customer';
import getSalesEntry from './read';
import { APISalesEntity, PostSalesData } from './type';
import subtractStockAndroid from './sale-android';
import subtractStockButton from './sale-button';
import subtractStockAccessories from './sale-accessories';

async function addSales({ instockId, customerId, discount, sellerId, due }: SalesEntry) {
    try {
        // check if instockId exists
        const existingInstock = await prisma.salesEntry.findFirst({
            where: {
                id: instockId,
            }
        })

        if (existingInstock) {
            return Response.json({ message: 'Sales data already exists' });
        } else {
            /**
             * 1. set instock sold
             */
            const createdModel = await prisma.salesEntry.create({
                data: {
                    instockId,
                    discount,
                    sellerId,
                    customerId,
                    due
                }
            });
            return createdModel;
        }
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function GET(): Promise<Response> {
    const data = await getSalesEntry();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No model found' });
    }
}

export async function POST(request: Request): Promise<Response> {
    const body: PostSalesData = await request.json();
    const { customer, salesEntity, seller } = body;

    let createdCustomerId: string | undefined;
    if (customer.phone) {
        const createdCustomer = await addCustomer({ ...customer });
        if (createdCustomer) {
            createdCustomerId = createdCustomer.id
        }
    }

    if (salesEntity) {
        const androidIdList = [];
        const buttonIdList = [];
        const accessoriesIdList = [];

        salesEntity.forEach(async (salesRow) => {
            // Process SalesRow data and save it to salesEntry
            // Send SalesRow data to sale-android
            // Send SalesRow data to sale-button
            // Send SalesRow data to sale-accessories
            const { stockId, type, quantity } = salesRow;
            switch (type) {
                case 'android':
                    androidIdList.push(stockId);
                    const updateStockAndroid = await subtractStockAndroid(stockId);
                    if (!updateStockAndroid) {
                        return Response.json({ message: 'Failed to update stockAndroid.' });
                    }
                    break;

                case 'button':
                    buttonIdList.push(stockId);
                    const updateStockButton = await subtractStockButton(stockId, quantity);
                    if (!updateStockButton) {
                        return Response.json({ message: 'Failed to update stockButton.' });
                    }
                    break;

                case 'accessories':
                    accessoriesIdList.push(stockId);
                    const updateStockAccessories = await subtractStockAccessories(stockId, quantity);
                    if (!updateStockAccessories) {
                        return Response.json({ message: 'Failed to update stockAccessories.' });
                    }
                    break;

                default:
                    break;
            }
        })
        return Response.json({ salesEntity });
        // if (createdModel) {
        //     const createdModel = await addSales({
        //         instockId: "",
        //         discount,
        //         sellerId,
        //         customerId,
        //         due,
        //     } as SalesEntry);
        //     return Response.json(createdModel);
        // } else {
        //     return Response.json({ message: 'Can not add Sales' });
        // }
    } else {
        return Response.json({ message: 'POST salesEntity to create new sales', postedData: body });
    }
}