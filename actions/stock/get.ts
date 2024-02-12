import { prisma } from '@/lib/prisma';

export async function getStockAndroidMany() {
    try {
        return await prisma.stockAndroid.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
            }
        });
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}