'use server';

import { prisma } from '@/lib/prisma';
import { Brand, Model, StockAndroid } from '@/prisma/generated/client';

export interface AnIncBM extends StockAndroid {
    brand: Brand;
    model: Model;
}

export async function getStockAndroidById(stockId: string): Promise<AnIncBM | undefined | null> {
    try {
        const stockAndroid = await prisma.stockAndroid.findFirst({
            where: {
                id: stockId
            },
            include: {
                brand: true,
                model: true,
            }
        });
        return stockAndroid;
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        await prisma.$disconnect();
    }
}