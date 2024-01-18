// Import the Prisma Client
import { prisma } from '@/lib/prisma';

// Use Prisma Client to insert the new user into the database
async function getBrand() {
    try {
        const users = await prisma.user.findMany();
        console.log('New user created:', users);
        return users;
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
    const data = await getBrand();
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
    const data = await getBrand();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No users found' });
    }
}