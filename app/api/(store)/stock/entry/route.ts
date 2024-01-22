// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { InStock } from '@/prisma/generated/client';

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
async function addModel(data: InStock) {
    try {
        const createdModel = await prisma.inStock.create({
            data: {
                name: data.name,
                IMEI: data.IMEI,
                price: data.price,
                purchasePrice: data.purchasePrice,
                modelId: data.modelId,
                productTypeId: data.productTypeId,
                brandId: data.brandId,
                ram: data.ram || '',
                rom: data.rom || '',
                color: data.color || ''
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
 * http://localhost:3000/api/stock/entry
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
 * http://localhost:3000/api/stock/entry
 * 
 * Body { brandId: string, model: string }
 * 
 * @param req 
 * @returns 
 */
export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    const { name, IMEI, price, purchasePrice, brandId, modelId, ram, rom, color, productTypeId } = body;

    if (name && IMEI && price && purchasePrice && brandId && modelId && productTypeId) {
        const existingBrand = await prisma.inStock.findFirst({
            where: {
                IMEI: IMEI
            }
        })
        if (existingBrand) {
            return Response.json({ message: 'Item already exists' });
        }
        const createdModel = await addModel(body);
        if (createdModel) {
            return Response.json(createdModel);
        }
        return Response.json({ message: 'Can not create inStock' });
    }
    return Response.json({ message: 'Data is missing in validation', postedData: body });
}