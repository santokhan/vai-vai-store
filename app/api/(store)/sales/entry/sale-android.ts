import { prisma } from "@/lib/prisma";
import { Body } from "./type";

export default async function subtractStockAndroid({ stockId }: Body) {
    try {
        const updatedStockAndroid = await prisma.stockAndroid.update({
            where: {
                id: stockId
            },
            data: {
                sold: true,
            }
        });
        return updatedStockAndroid;
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}
