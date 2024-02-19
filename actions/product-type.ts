'use server';

import { prisma } from '@/lib/prisma';
import { ProductType } from '@/prisma/generated/client';

export async function getType() {
    try {
        const productTypes: ProductType[] = await prisma.productType.findMany();
        return productTypes;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}
