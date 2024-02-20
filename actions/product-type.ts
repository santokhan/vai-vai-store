'use server';

import { prisma } from '@/lib/prisma';
import { ProductType } from '@/prisma/generated/client';

export async function getType() {
    try {
        const founded: ProductType[] = await prisma.productType.findMany();
        return founded;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function getTypeId(type: string) {
    try {
        const founded: ProductType | null = await prisma.productType.findFirst({
            where: {
                type
            }
        });
        return founded?.id;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}
