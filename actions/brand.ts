'use server';

import { prisma } from '@/lib/prisma';
import { Brand } from '@/prisma/generated/client';

export async function getBrand() {
    try {
        const brands: Brand[] = await prisma.brand.findMany();
        return brands;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function getBrandByTypeId(productTypeId: string) {
    try {
        const brands: Brand[] = await prisma.brand.findMany(
            {
                where: {
                    productTypeId
                }
            }
        );
        return brands;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}