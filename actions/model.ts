'use server';

import { prisma } from '@/lib/prisma';
import { Model } from '@/prisma/generated/client';

export async function getModel() {
    try {
        const models: Model[] = await prisma.model.findMany();
        return models;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function getModelByBrandId(brandId: string) {
    try {
        const models: Model[] = await prisma.model.findMany(
            {
                where: {
                    brandId
                }
            }
        );
        return models;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}
