import { prisma } from '@/lib/prisma';

export async function getAccessoriesMany() {
    try {
        return await prisma.stockButton.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
            }
        });
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        await prisma.$disconnect();
    }
}