import { prisma } from '@/lib/prisma';

async function getAndroid() {
    try {
        return await prisma.stockAndroid.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
            }
        });
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function GET(): Promise<Response> {
    const data = await getAndroid();

    if (data) {
        return Response.json(data, {
            headers: {
                'Cache-Control': 'no-store, max-age=0',
                'Content-Type': 'application/json',
            }
        });
    } else {
        return Response.json({ message: 'No data found in android stock' });
    }
}