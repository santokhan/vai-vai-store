import { prisma } from '@/lib/prisma';
import { Brand, Model, StockAndroid } from '@/prisma/generated/client';

export interface StockAndroidIncludes extends StockAndroid {
    brand: Brand;
    model: Model;
}

async function getModelIdByIMEI(IMEI: string): Promise<StockAndroidIncludes | undefined> {
    try {
        const foundedAndroidList = await prisma.stockAndroid.findMany({
            where: {
                IMEI,
            },
            include: {
                model: true,
                brand: true,
            }
        });
        return foundedAndroidList[0];
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
        return Response.json({ message: 'Please provide an ?imei=IMEI on URL query parameter' });
    } else {
        const foundedAndroidList = await getModelIdByIMEI(IMEI);
        if (foundedAndroidList) {
            if (foundedAndroidList.sold === false) {
                return Response.json(foundedAndroidList as StockAndroidIncludes);
            } else {
                return Response.json({ message: 'The phone with this IMEI already sold.' });
            }
        } else {
            return Response.json({ message: 'No Android found with this IMEI.' });
        }
    }
}