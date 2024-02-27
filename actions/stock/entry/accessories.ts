'use server';

import { StockAccessoriesPOST } from '@/app/api/(store)/stock/entry/post-data-type';
import { prisma } from '@/lib/prisma';


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


export async function addAccessoriesStock(data: StockAccessoriesPOST) {
    const { modelId, quantity, brandId } = data;
    if (modelId && quantity && brandId) {
        const exist = await getAccessoriesSingle(modelId, brandId);

        if (exist) {
            const newQuantity = exist.quantity + quantity;
            const updated = await updateAccessories(exist.id, newQuantity);
            return { message: updated ? `The updated quantity is ${updated.quantity}` : 'Failed to update quantity.' };
        } else {
            const created = await addAccessories(data);
            return { message: created ? `Data added with quantity: ${created.quantity}` : 'Failed to add data.' };
        }
    } else {
        return { message: 'Data is missing.' };
    }
}
