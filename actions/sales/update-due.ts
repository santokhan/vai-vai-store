'use server';

import { prisma } from "@/lib/prisma";

export default async function updateDue(stockItemId: string, due: number) {
    try {
        const stockItem = await prisma.salesEntry.findUnique({
            where: {
                id: stockItemId
            }
        });

        if (!stockItem) {
            return { message: `Stock item not found.` };
        }

        const newDue = (stockItem.due ?? 0) - due;

        const updated = await prisma.salesEntry.update({
            where: {
                id: stockItemId
            },
            data: {
                due: newDue,
                dueDate: new Date()
            }
        })
        return { message: "Due updated successfully. New due: " + updated.due }
    } catch (error) {
        console.error(error);
    }
}