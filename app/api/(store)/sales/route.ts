import { prisma } from "@/lib/prisma";
import { SalesEntry } from "@/prisma/generated/client";

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

/**
 * http://localhost:3000/api/sales/
 * 
 * @param req 
 * @returns 
 */
export async function GET(req: Request): Promise<Response> {
    const url = new URL(req.url)
    const salesId = url.searchParams.get('salesId');

    if (salesId) {
        const singleSalesData: SalesEntry | null | undefined = await getSalesIndividual(salesId);
        if (singleSalesData) {
            return Response.json(singleSalesData, {
                headers: {
                    'cache-control': 'no-store',
                    'content-type': 'application/json',
                }
            });
        } else {
            return Response.json({ message: 'No data found in salesEntry', salesId });
        }
    } else {
        return Response.json({ message: 'Wrong query params' });
    }
}