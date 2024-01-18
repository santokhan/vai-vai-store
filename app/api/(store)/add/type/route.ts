// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { ProductType } from '@/prisma/generated/client';

// Use Prisma Client to insert the new user into the database
async function getType() {
    try {
        const productType: ProductType[] = await prisma.productType.findMany();
        return productType;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

// Use Prisma Client to insert the new user into the database
async function addType(type: string): Promise<ProductType | undefined> {
    if (!type) {
        return undefined;
    }

    try {
        const createdType: ProductType = await prisma.productType.create({
            data: {
                type: type
            }
        });
        return createdType;
    } catch (error) {
        console.error('Error creating user:', error);
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
export async function GET(request: Request): Promise<Response> {
    const data = await getType();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No users found' });
    }
}

/**
 * POST Brand
 * 
 * http://localhost:3000/api/add/brand
 * 
 * @param req 
 * @returns 
 */
export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    const { type } = body;

    if (type) {
        const existType = await prisma.productType.findFirst({
            where: {
                type: type
            }
        })
        if (existType) {
            return Response.json({ message: 'Type already exist' });
        }

        const data = await addType(type);
        if (data) {
            return Response.json(data);
        } else {
            return Response.json({ message: 'Can not create new type' });
        }
    } else {
        return Response.json({ message: 'Can not read undefined of id and type' });
    }
}