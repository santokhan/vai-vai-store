import { prisma } from '@/lib/prisma';
import { Brand, Model, StockAndroid } from '@/prisma/generated/client';

export async function getStockAndroidMany(): Promise<StockAndroid[] | undefined> {
    try {
        const stockAndroid = await prisma.stockAndroid.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
            }
        });
        if (stockAndroid) {
            return stockAndroid;
        }
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
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

export interface StockAndroidInclude extends StockAndroid {
    brand: Brand;
    model: Model;
}

export async function getStockSingle(stockId: string): Promise<StockAndroidInclude | undefined> {
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
        }
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}