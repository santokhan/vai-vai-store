// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { Customer, SalesEntry } from '@/prisma/generated/client';

/**
 * Use Prisma Client to insert the new model into the database
 * 
 * @param  
 * @returns 
 */
async function getModel() {
    try {
        return await prisma.model.findMany();
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

/**
 * Use Prisma Client to insert the new model into the database
 * 
 * @param  
 * @returns 
 */
async function addSales({ instockId, customerId, IMEI, price, discount, sellerId, due }: SalesEntry) {
    try {
        // check if instockId exists
        const existingInstock = await prisma.salesEntry.findFirst({
            where: {
                id: instockId,
                IMEI: IMEI
            }
        })

        if (existingInstock) {
            return Response.json({ message: 'Sales data already exists' });
        } else {
            const createdModel = await prisma.salesEntry.create({
                data: {
                    instockId,
                    IMEI,
                    price,
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

/**
 * Use Prisma Client to insert the new model into the database
 * 
 * @param  
 * @returns 
 */
async function addCustomer({ name, email, phone }: Customer) {
    try {
        const existingCustomer = await prisma.customer.findFirst({
            where: {
                phone: phone
            }
        })

        if (existingCustomer) {
            return existingCustomer;
        } else {
            const createdModel = await prisma.customer.create({
                data: {
                    name,
                    email,
                    phone
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

/**
 * GET model
 * 
 * http://localhost:3000/api/sales/entry
 * 
 * @param req 
 * @returns 
 */
export async function GET(): Promise<Response> {
    const data = await getModel();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No model found' });
    }
}

/**
 * http://localhost:3000/api/sales/entry
 * 
 * Body { brandId: string, model: string }
 * 
 * @param req 
 * @returns 
 */
export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    // return Response.json({ body })
    const { IMEI, price, discount, instockId, customer, sellerId, due } = body;

    /**
     * 1. check if customer exists
     * 2. if not create customer
     * 3. get customerId
     * 4. create sales entry includes customerId
     * 5. return sales entry
     */
    if (customer) {
        const createdCustomer = await addCustomer(customer);
        if (!createdCustomer) {
            return Response.json({ message: 'Can not create customer' });
        } else {
            const customerId = createdCustomer.id;
            // return Response.json({ customerId });

            if (IMEI && price && instockId && customerId) {
                const existingBrand = await prisma.salesEntry.findFirst({
                    where: {
                        IMEI: IMEI
                    }
                })
                if (existingBrand) {
                    return Response.json({ message: 'Sales Entry already exists' });
                } else {
                    const createdModel = await addSales({
                        instockId,
                        IMEI,
                        price,
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