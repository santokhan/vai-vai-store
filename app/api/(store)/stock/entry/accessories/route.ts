import { prisma } from '@/lib/prisma';
import { StockAccessoriesPOST } from '../post-data-type';

async function getAccessoriesSingle(modelId: string, brandId: string) {
    try {
        return await prisma.stockAccessories.findFirst({
            where: {
                modelId,
                brandId
            }
        });
    } catch (error) {
        console.error('Error getting accessories data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

async function getAccessoriesMany() {
    try {
        return await prisma.stockAccessories.findMany();
    } catch (error) {
        console.error('Error getting accessories data:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

async function addAccessories(body: StockAccessoriesPOST) {
    try {
        const createdModel = await prisma.stockAccessories.create({
            data: body
        });
        return createdModel;
    } catch (error) {
        console.error('Error creating accessories data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

async function updateAccessories(id: string, quantity: number) {
    try {
        const createdModel = await prisma.stockAccessories.update({
            where: {
                id
            },
            data: {
                quantity
            }
        });
        return createdModel;
    } catch (error) {
        console.error('Error creating accessories data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function GET(): Promise<Response> {
    const data = await getAccessoriesMany();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No model found' });
    }
}

export async function POST(request: Request): Promise<Response> {
    const body: StockAccessoriesPOST = await request.json();
    const { modelId, quantity, brandId } = body;
    if (modelId && quantity && brandId) {
        const exist = await getAccessoriesSingle(modelId, brandId);

        if (exist) {
            const newQuantity = exist.quantity + quantity;
            const updated = await updateAccessories(exist.id, newQuantity);
            return Response.json({
                message: updated ? `The updated quantity is ${updated.quantity}` : 'Failed to update quantity.'
            });
        } else {
            const created = await addAccessories(body);
            return Response.json({
                message: created ? `Data added with quantity: ${created.quantity}` : 'Failed to add data.'
            });
        }
    } else {
        return Response.json({ message: 'Data is missing. Required fields: ', body });
    }
}
