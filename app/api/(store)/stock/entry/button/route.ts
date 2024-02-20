import { prisma } from '@/lib/prisma';
import { StockButtonPOST } from '../post-data-type';

async function getButtonSingle(modelId: string) {
    try {
        return await prisma.stockButton.findFirst({
            where: {
                modelId
            }
        });
    } catch (error) {
        console.error('Error getting button phone data:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

async function getButtonMany() {
    try {
        return await prisma.stockButton.findMany();
    } catch (error) {
        console.error('Error getting button phone data:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

async function addButton(data: StockButtonPOST) {
    try {
        const upsertedStockButton = await prisma.stockButton.create({
            data: data
        })
        return upsertedStockButton;
    } catch (error) {
        console.error('Error creating button phone data:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

async function updateButton(id: string, quantity: number) {
    try {
        const upsertedStockButton = await prisma.stockButton.update({
            where: {
                id
            },
            data: {
                quantity
            }
        })
        return upsertedStockButton;
    } catch (error) {
        console.error('Error creating button phone data:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function GET(): Promise<Response> {
    const data = await getButtonMany();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No model found' });
    }
}

export async function POST(request: Request): Promise<Response> {
    const body: StockButtonPOST = await request.json();
    const { modelId, quantity } = body;

    if (modelId && quantity) {
        const exist = await getButtonSingle(modelId);

        if (exist) {
            const newQuantity = exist.quantity + quantity
            const updatedAStock = await updateButton(exist.id, newQuantity);
            if (updatedAStock) {
                return Response.json({ message: `The updated quantity is ${updatedAStock.quantity}` });
            } else {
                return Response.json({ message: 'Can not update quantity.' });
            }
        } else {
            const createdModel = await addButton(body);
            if (createdModel) {
                return Response.json({ message: `Data created with model id: ${createdModel.modelId}` });
            } else {
                return Response.json({ message: 'Failed to add data.' });
            }
        }
    } else {
        return Response.json({ message: 'Data is missing. Required schema: ', body });
    }
}