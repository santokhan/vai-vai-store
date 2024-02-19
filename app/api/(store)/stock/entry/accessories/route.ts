import { prisma } from '@/lib/prisma';
import { StockAccessoriesPOST } from '../post-data-type';

async function getAccessoriesSingle(modelId: string) {
    try {
        return await prisma.stockAccessories.findFirst({
            where: {
                modelId
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
    const { modelId, quantity, } = body;
    if (modelId && quantity) {
        const exist = await getAccessoriesSingle(modelId);

        if (exist) {
            const updatedAStock = await updateAccessories(exist.id, quantity);
            if (updatedAStock) {
                return Response.json({ message: `The updated quantity is ${updatedAStock.quantity}` });
            } else {
                return Response.json({ message: 'Can not update quantity.' });
            }
        } else {
            const createdModel = await addAccessories(body);
            if (createdModel) {
                return Response.json({ message: `Data created with model id: ${createdModel.modelId}` });
            } else {
                return Response.json({ message: 'Failed to add data.' });
            }
        }
    } else {
        return Response.json({ message: 'Data is missing. Required fields: ', body });
    }
}
