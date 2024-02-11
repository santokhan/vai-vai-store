// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { Customer, SalesEntry } from '@/prisma/generated/client';
import { addCustomer } from './create-customer';
import getSalesEntry from './read';

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
    const body = await request.json();
    // return Response.json({ body })
    const { discount, instockId, customer, sellerId, due } = body;

    /**
     * 1. check if customer exists
     * 2. if not create customer
     * 3. get customerId
     * 4. create sales entry includes customerId
     * 5. return sales entry
     */
    if (discount && instockId && customer && sellerId && due) {
        const createdCustomer = await addCustomer(customer);
        if (!createdCustomer) {
            return Response.json({ message: 'Can not create customer' });
        } else {
            const customerId = createdCustomer.id;
            // return Response.json({ customerId });

            if (instockId && customerId) {
                const existingBrand = await prisma.salesEntry.findFirst({
                    where: {
                        instockId: instockId
                    }
                })
                if (existingBrand) {
                    return Response.json({ message: 'Sales Entry already exists' });
                } else {
                    const createdModel = await addSales({
                        instockId,
                        discount,
                        sellerId,
                        customerId,
                        due,
                    } as SalesEntry);
                    if (createdModel) {
                        return Response.json(createdModel);
                    } else {
                        return Response.json({ message: 'Can not add Sales' });
                    }
                }
            } else {
                return Response.json({ message: 'Data is missing in validation', postedData: body });
            }
        }
    } else {
        return Response.json({ message: 'Data is missing in validation', postedData: body });
    }
}