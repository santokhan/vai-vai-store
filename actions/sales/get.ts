'use server';

import { prisma } from "@/lib/prisma";
import { Customer, SalesEntry, Seller } from "@/prisma/generated/client";

export async function getSalesIndividual(id: string) {
    try {
        return await prisma.salesEntry.findFirst({
            where: {
                id
            },
            include: {
                customer: true,
                seller: true
            }
        });
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

export async function getSalesMany() {
    try {
        const salesData: (SalesEntry & { customer: Customer; seller: Seller })[] = await prisma.salesEntry.findMany({
            include: {
                customer: true,
                seller: true
            }
        });
        return salesData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}