import { prisma } from "@/lib/prisma";

export default async function subtractStockButton(stockId: string, quantity: number) {
    try {
        const updatedStockButton = await prisma.stockButton.update({
            where: {
                id: stockId
            },
            data: {
                quantity: {
                    decrement: quantity
                },
            }
        });
        return updatedStockButton;
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}
