import { prisma } from '@/lib/prisma';
import getSalesEntry from './read';
import { APISalesEntity, APISalesEntry } from './type';

async function addSales({ customerId, salesEntity: entity, sellerId, discount, due }: {
    customerId: string
    due: number
    discount: number
    sellerId: string
    salesEntity: APISalesEntity[]
}) {
    try {
        return await prisma.salesEntry.create({
            data: {
                customerId,
                discount,
                sellerId,
                due,
                entity
            }
        })
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
