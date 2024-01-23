// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { InStock } from '@/prisma/generated/client';

/**
 * Use Prisma Client to insert the new model into the database
 * 
 * @param  
 * @returns 
 */
async function getModelIdByIMEI(IMEI: string) {
    try {
        return await prisma.inStock.findMany({
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

    console.log({ IMEI });

    if (!IMEI) {
        return Response.json({ message: 'No IMEI found' });
    }

    const model = await getModelIdByIMEI(IMEI);
    if (model) {
        return Response.json(model);
    } else {
        return Response.json({ message: 'No model found' });
    }
}