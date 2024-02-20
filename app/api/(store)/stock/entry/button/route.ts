import { prisma } from '@/lib/prisma';
import { StockButtonPOST } from '../post-data-type';

async function getButtonSingle(modelId: string, brandId: string, color: string) {
    try {
        return await prisma.stockButton.findFirst({
            where: {
                modelId,
                brandId,
                color
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
    const { modelId, quantity, brandId, color } = body;

    if (modelId && quantity && brandId && color) {
        const exist = await getButtonSingle(modelId, brandId, color);

        if (exist) {
            const newQuantity = exist.quantity + quantity;
            const updated = await updateButton(exist.id, newQuantity);
            return Response.json({
                message: updated ? `The updated quantity is ${updated.quantity}` : 'Failed to update quantity.'
            });
        } else {
            const created = await addButton(body);
            return Response.json({
                message: created ? `Data added with quantity: ${created.quantity}` : 'Failed to add data.'
            });
        }
    } else {
        return Response.json({ message: 'Data is missing. Required schema: ', body });
    }
}