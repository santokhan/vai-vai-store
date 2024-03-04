'use server';

import { prisma } from '@/lib/prisma';
import { Brand, Model, ProductType, StockAndroid } from '@/prisma/generated/client';

export interface StockAndroidInclude extends StockAndroid {
    productType: ProductType;
    brand: Brand;
    model: Model;
}

export async function getStockAndroidMany(): Promise<StockAndroidInclude[] | undefined> {
    try {
        const stockAndroid = await prisma.stockAndroid.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
            }
        });
        if (stockAndroid) {
            return stockAndroid.sort((a, b) => {
                if (a.createdAt && b.createdAt) {
                    return b.createdAt.getTime() - a.createdAt.getTime();
                } else {
                    return 1;
                }
            });
        }
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function getStockAndroidPagination(pageNumber: number, pageSize: number): Promise<StockAndroid[] | undefined> {
    try {
        const skipAmount = (pageNumber - 1) * pageSize;

        const stockAndroid = await prisma.stockAndroid.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
            },
            skip: skipAmount,
            take: pageSize,
        });

        return stockAndroid;
    } catch (error) {
        console.error('Error fetching stockAndroid:', error);
        return undefined;
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}