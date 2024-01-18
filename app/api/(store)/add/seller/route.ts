// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { ProductType, Seller } from '@/prisma/generated/client';

// Use Prisma Client to insert the new user into the database
async function getSeller() {
    try {
        const sellers: Seller[] = await prisma.seller.findMany();
        console.log('New user created:', sellers);
        return sellers;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

// Use Prisma Client to insert the new user into the database
async function addSeller(name: string): Promise<Seller | undefined> {
    if (!name) {
        return undefined;
    }

    try {
        const createdSeller: Seller = await prisma.seller.create({
            data: {
                name: name
            }
        });
        console.log('New user created:', createdSeller);
        return createdSeller;
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
    const data = await getSeller();
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
    const { name } = body;

    if (name) {
        const existType = await prisma.seller.findFirst({
            where: {
                name: name
            }
        })
        if (existType) {
            return Response.json({ message: 'Type already exist' });
        }

        const data = await addSeller(name);
        if (data) {
            return Response.json(data);
        } else {
            return Response.json({ message: 'Can not create new type' });
        }
    } else {
        return Response.json({ message: 'Can not read undefined of id and type' });
    }
}