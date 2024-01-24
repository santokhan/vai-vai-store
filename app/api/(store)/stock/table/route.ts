// Import the Prisma Client
import { prisma } from '@/lib/prisma';

/**
 * Use Prisma Client to insert the new model into the database
 * 
 * @param  
 * @returns 
 */
async function getModel() {
    try {
        return await prisma.inStock.findMany({
            include: {
                productType: true,
                brand: true,
                model: true,
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
 * Use Prisma Client to insert the new model into the database
 * 
 * @param  
 * @returns 
 */
async function addModel({ brandId, model }: { brandId: string, model: string }) {
    try {
        const createdModel = await prisma.model.create({
            data: {
                brandId,
                model
            }
        });
        return createdModel;
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

/**
 * GET model
 * 
 * http://localhost:3000/api/stock/table
 * 
 * @param req 
 * @returns 
 */
export async function GET(): Promise<Response> {
    const data = await getModel();
    if (data) {
        return Response.json(data, {
            headers: {
                'Cache-Control': 'no-store',
                'Content-Type': 'application/json'
            }
        });
    } else {
        return Response.json({ message: 'No data found in stock' });
    }
}
