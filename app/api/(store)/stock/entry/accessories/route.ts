// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { StockAccessoriesPOST } from '../post-data-type';

async function getStockButton() {
    try {
        return await prisma.stockAccessories.findMany();
    } catch (error) {
        console.error('Error getting accessories data:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

async function addStockButton(body: StockAccessoriesPOST) {
    try {
        const createdModel = await prisma.stockAccessories.create({
            data: body
        });
        return createdModel;
    } catch (error) {
        console.error('Error creating accessories data:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function GET(): Promise<Response> {
    const data = await getStockButton();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No model found' });
    }
}

export async function POST(request: Request): Promise<Response> {
    const body: StockAccessoriesPOST = await request.json();
    const { sellingPrice, modelId, quantity } = body;
    if (sellingPrice && modelId && quantity) {
        const existingBrand = await prisma.stockAccessories.findFirst({
            where: {
                modelId
            }
        })
        if (existingBrand) {
            return Response.json({ message: 'This button phone already exists in stock.' });
        } else {
            const createdModel = await addStockButton(body);
            if (createdModel) {
                return Response.json({ message: `Button phone data created with model id: ${createdModel.modelId}` });
            } else {
                return Response.json({ message: 'Failed to add accessories data.' });
            }
        }
    } else {
        return Response.json({ message: 'Data is missing. Required fields: ', body });
    }
}
