import { prisma } from '@/lib/prisma';

async function getSalesMany() {
    try {
        return await prisma.salesEntry.findMany();
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function GET(): Promise<Response> {
    const data = await getSalesMany();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No data found in salesEntry' });
    }
}
