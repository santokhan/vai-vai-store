import { prisma } from "@/lib/prisma";
import { Body } from "./type";

export default async function subtractStockButton({ stockId, quantity }: Body) {
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
