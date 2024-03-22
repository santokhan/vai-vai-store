'use server';

import { prisma } from "@/lib/prisma";
import { SalesInclude_C_S } from "../get";

export async function anroidSalesToday(): Promise<SalesInclude_C_S[] | undefined> {
    try {
        const sales = await prisma.salesEntry.findMany({
            where: {
                createdAt: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0)),
                }
            },
            include: {
                customer: true,
                seller: true
            }
        });

        if (sales) return sales;
    } catch (error) {
        // handle error on server console
        console.error(error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}
