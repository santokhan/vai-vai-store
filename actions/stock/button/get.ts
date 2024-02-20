'use server';

import { prisma } from '@/lib/prisma';
import { Brand, Model, StockButton } from '@/prisma/generated/client';

export interface StockButtonIncludeBrandModel extends StockButton {
    model: Model;
    brand: Brand
}

export async function getButtonMany() {
    try {
        return await prisma.stockButton.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
            }
        });
    } catch (error) {
        console.error('Failed to read data ', error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function getStockButtonByModel(modelId: string, color: string): Promise<StockButtonIncludeBrandModel | undefined> {
    try {
        const founded = await prisma.stockButton.findFirst({
            where: {
                modelId,
                color
            },
            include: {
                brand: true,
                model: true,
            }
        });
        return founded || undefined;
    } catch (error) {
        console.error('Failed to read data ', error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function getStockButtonById(id: string): Promise<StockButtonIncludeBrandModel | undefined> {
    try {
        const founded = await prisma.stockButton.findFirst({
            where: {
                id
            },
            include: {
                brand: true,
                model: true,
            }
        });
        return founded || undefined;
    } catch (error) {
        console.error('Failed to read data ', error);
    } finally {
        await prisma.$disconnect();
    }
}