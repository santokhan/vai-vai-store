import { prisma } from '@/lib/prisma';
import { StockButtonPOST } from '../post-data-type';

async function getStockButton() {
    try {
        return await prisma.stockButton.findMany();
    } catch (error) {
        console.error('Error getting button phone data:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

async function addStockButton(modelId: string, quantity: number, sellingPrice: number) {
    try {
        // const upsertedStockButton = await prisma.stockButton.upsert({
        //     where: {
        //         modelId
        //     },
        //     update: {
        //         quantity
        //     },
        //     create: {
        //         modelId,
        //         quantity,
        //         sellingPrice,
        //     }
        // })
        // return upsertedStockButton;
        return null;
    } catch (error) {
        console.error('Error creating button phone data:', error);
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
    const body: StockButtonPOST = await request.json();
    const { sellingPrice, modelId, quantity } = body;

    if (sellingPrice && modelId && quantity) {
        const createdModel = await addStockButton(modelId, quantity, sellingPrice);
        if (createdModel) {
            return Response.json({ message: `Button phone data created with model id: ${createdModel}` });
        } else {
            return Response.json({ message: 'Failed to add button phone data' });
        }
    } else {
        return Response.json({ message: 'Data is missing. Required schema: ', body });
    }
}