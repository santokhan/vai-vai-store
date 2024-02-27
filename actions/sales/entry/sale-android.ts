import { prisma } from "@/lib/prisma";

export default async function subtractStockAndroid(id: string) {
    try {
        const updatedStockAndroid = await prisma.stockAndroid.update({
            where: {
                id
            },
            data: {
                sold: true
            }
        });
        return updatedStockAndroid;
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        await prisma.$disconnect();
    }
}
