'use server';

import { prisma } from '@/lib/prisma';
import { Brand, Model, StockAndroid } from '@/prisma/generated/client';

export interface StockAndroidInclude extends StockAndroid {
    brand: Brand;
    model: Model;
}

export async function getStockAndroidById(stockId: string) {
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
        if (stockAndroid) {
            return stockAndroid;
        } else {
            return { message: "Android Stock is empty" };
        }
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}