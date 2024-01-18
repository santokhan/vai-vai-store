// Import the Prisma Client
import { prisma } from '@/lib/prisma';

// Use Prisma Client to insert the new user into the database
async function getAllUsers() {
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
 * GET all users
 * 
 * http://localhost:3000/api/user
 * 
 * @param req 
 * @returns 
 */
export async function GET(request: Request) {
    const data = await getAllUsers();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No users found' });
    }
}