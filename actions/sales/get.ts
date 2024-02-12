import { prisma } from "@/lib/prisma";

export async function getSalesIndividual(id: string) {
    try {
        return await prisma.salesEntry.findFirst({
            where: {
                id
            },
            include: {
                customer: true
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
        return await prisma.salesEntry.findMany({
            include: {
                customer: true,
            }
        });
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}