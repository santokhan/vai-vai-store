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
        return await prisma.model.findMany();
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
 * http://localhost:3000/api/add/model
 * 
 * @param req 
 * @returns 
 */
export async function GET(): Promise<Response> {
    const data = await getModel();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No model found' });
    }
}

/**
 * POST model
 * 
 * http://localhost:3000/api/add/model
 * 
 * Body { brandId: string, model: string }
 * 
 * @param req 
 * @returns 
 */
export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    const { brandId, model } = body;

    if (brandId && model) {
        const existingBrand = await prisma.model.findFirst({
            where: {
                brandId,
                model
            }
        })
        console.log('existingBrand', existingBrand)
        if (existingBrand) {
            return Response.json({ message: 'Model already exists' });
        }
        const createdModel = await addModel({ brandId, model });
        if (createdModel) {
            return Response.json(createdModel);
        }
        return Response.json({ message: 'Can not create model' });
    }
    return Response.json({ message: 'Can not read model and brandId in posted data' });
}