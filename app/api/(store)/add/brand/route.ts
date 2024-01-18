// Import the Prisma Client
import { prisma } from '@/lib/prisma';

// Use Prisma Client to insert the new brand into the database
async function getBrand() {
    try {
        return await prisma.brand.findMany();
    } catch (error) {
        console.error('Error creating brand:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

// Use Prisma Client to insert the new brand into the database
async function addBrand({ brandName, productTypeId }: { brandName: string, productTypeId: string }) {
    try {
        const brands = await prisma.brand.create({
            data: {
                brandName,
                productTypeId
            }
        });
        return brands;
    } catch (error) {
        console.error('Error creating brand:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

/**
 * GET Brand
 * 
 * http://localhost:3000/api/add/brand
 * 
 * @param req 
 * @returns 
 */
export async function GET(): Promise<Response> {
    const data = await getBrand();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No brands found' });
    }
}

/**
 * POST Brand
 * 
 * http://localhost:3000/api/add/brand
 * 
 * Body { brandName: string, productTypeId: string }
 * 
 * @param req 
 * @returns 
 */
export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    const { brandName, productTypeId } = body;

    if (brandName && productTypeId) {
        const existingBrand = await prisma.brand.findFirst({
            where: {
                brandName: brandName,
                productTypeId: productTypeId
            }
        })
        if (existingBrand) {
            return Response.json({ message: 'Brand already exists' });
        }

        const createdBrand = await addBrand({ brandName, productTypeId });
        if (createdBrand) {
            return Response.json(createdBrand);
        }
        return Response.json({ message: 'Can not create brand' });
    }
    return Response.json({ message: 'Can not read brandName and productTypeId in posted data' });
}