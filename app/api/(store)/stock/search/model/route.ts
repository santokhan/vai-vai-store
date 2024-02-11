// Import the Prisma Client
import { prisma } from '@/lib/prisma';

async function getModel(IMEI: string) {
    try {
        return await prisma.stockAndroid.findMany({
            where: {
                IMEI
            },
            include: {
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

/**
 * GET model
 * 
 * http://localhost:3000/api/sales/entry/imei?imei=123456789012345
 * 
 * @param req 
 * @returns 
 */
export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const IMEI = url.searchParams.get('imei');

    if (!IMEI) {
        return Response.json({ message: 'No IMEI found' });
    } else {
        const model = await getModel(IMEI);
        if (model) {
            return Response.json(model);
        } else {
            return Response.json({ message: 'No model found' });
        }
    }
}