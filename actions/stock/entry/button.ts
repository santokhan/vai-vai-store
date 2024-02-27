'use server';

import { StockButtonPOST } from '@/app/api/(store)/stock/entry/post-data-type';
import { prisma } from '@/lib/prisma';


async function addButtonHistory(data: StockButtonPOST) {
    try {
        const created = await prisma.historyButtonStock.create({ data });
        return { message: created ? "History created" : "Falied to create history" };
    } catch (error) {
        console.error('Error getting button phone data:', error);
    } finally {
        await prisma.$disconnect();
    }
}


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
        await prisma.$disconnect();
    }
}

export async function addButtonStock(data: StockButtonPOST) {
    const { modelId, quantity, brandId, color, productTypeId, purchasePrice, sellingPrice, name } = data;

    if (modelId && quantity && brandId && color) {
        const exist = await getButtonSingle(modelId, brandId, color);

        if (exist) {
            const newQuantity = exist.quantity + quantity;
            const updated = await updateButton(exist.id, newQuantity);
            await addButtonHistory(data);
            return { message: updated ? `The updated quantity is ${updated.quantity}` : 'Failed to update quantity' }
        } else {
            const created = await addButton({ modelId, quantity, brandId, color, productTypeId, purchasePrice, sellingPrice, name });
            await addButtonHistory(data);
            return { message: created ? `Data added with quantity: ${created.quantity}` : 'Failed to add data' }
        }
    } else {
        return { message: 'Data is missing' };
    }
}