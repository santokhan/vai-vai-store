import { prisma } from "@/lib/prisma";

export default async function subtractStockAccessories(stockId: string, quantity: number) {
    try {
        const updatedStockAccessories = await prisma.stockAccessories.update({
            where: {
                id: stockId
            },
            data: {
                quantity: {
                    decrement: quantity
                },
            }
        });
        return updatedStockAccessories;
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}
