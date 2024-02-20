'use server';

import { prisma } from '@/lib/prisma';
import { Brand, Model, StockAccessories } from '@/prisma/generated/client';

export interface S_A_Include_B_M extends StockAccessories {
    model: Model;
    brand: Brand
}

export async function getAccessoriesMany() {
    try {
        return await prisma.stockAccessories.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
            }
        });
    } catch (error) {
        console.error('Data does not exist ', error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAccessoriesByModel(modelId: string): Promise<S_A_Include_B_M | undefined> {
    try {
        const founded = await prisma.stockAccessories.findFirst({
            where: {
                modelId
            },
            include: {
                brand: true,
                model: true,
            }
        });
        if (founded) {
            return founded;
        }
    } catch (error) {
        console.error('Data does not exist ', error);
    } finally {
        await prisma.$disconnect();
    }
}