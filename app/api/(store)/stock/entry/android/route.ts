// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { StockAndroidPOST } from '../post-data-type';

async function getStockAndroid() {
    try {
        return await prisma.stockAndroid.findMany();
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

async function addStockAndroid(body: StockAndroidPOST) {
    try {
        const createdModel = await prisma.stockAndroid.create({
            data: {
                name: body.name,
                IMEI: body.IMEI,
                sellingPrice: body.sellingPrice,
                purchasePrice: body.purchasePrice,
                modelId: body.modelId,
                productTypeId: body.productTypeId,
                brandId: body.brandId,
                ram: body.ram,
                rom: body.rom,
                color: body.color,
                sold: false
            }
        });
        return createdModel;
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function GET(): Promise<Response> {
    const data = await getStockAndroid();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No model found' });
    }
}

export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    const { IMEI, modelId, sellingPrice } = body;

    if (IMEI && modelId && sellingPrice) {
        const existingBrand = await prisma.stockAndroid.findFirst({
            where: {
                IMEI: IMEI
            }
        })
        if (existingBrand) {
            return Response.json({ message: 'Item already exists' });
        } else {
            const createdModel = await addStockAndroid(body);
            if (createdModel) {
                return Response.json({ message: `Android phone data created with modelId: ${createdModel.modelId}` });
            } else {
                return Response.json({ message: 'Failed to add android phone data.' });
            }
        }
    } else {
        return Response.json({ message: 'Data is missing. Required fields: ', body });
    }
}