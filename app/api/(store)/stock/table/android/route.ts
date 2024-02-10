// Import the Prisma Client
import { prisma } from '@/lib/prisma';

async function getStockAndroid() {
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

export async function GET(req: Request, res: Response): Promise<Response> {
    const data = await getStockAndroid();

    if (data) {
        return Response.json(data, {
            headers: {
                'Cache-Control': 'no-store',
                'Content-Type': 'application/json',
                'age': '0'
            } as HeadersInit
        });
    } else {
        return Response.json({ message: 'No data found in stock' });
    }
}
