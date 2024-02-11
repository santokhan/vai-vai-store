import { prisma } from "@/lib/prisma";

export default async function getSalesEntry() {
    try {
        return await prisma.salesEntry.findMany();
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}