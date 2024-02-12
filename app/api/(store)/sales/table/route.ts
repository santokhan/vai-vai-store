import { prisma } from '@/lib/prisma';

async function getModel() {
    try {
        return await prisma.salesEntry.findMany();
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

/**
 * http://localhost:3000/api/sales/table
 * 
 * @param req 
 * @returns 
 */
export async function GET(): Promise<Response> {
    const data = await getModel();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No data found in salesEntry' });
    }
}
