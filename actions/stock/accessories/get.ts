'use server';

import { prisma } from '@/lib/prisma';

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