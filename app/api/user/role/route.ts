// Import the Prisma Client
import { prisma } from '@/lib/prisma';
import { User } from '@/prisma/generated/client';

// Use Prisma Client to insert the new user into the database
async function getRole(email: string): Promise<string | undefined> {
    if (email === undefined) {
        return undefined;
    }
    try {
        const createdUser = await prisma.user.findFirst({
            where: {
                email: email
            },
        });
        console.log('New user created:', createdUser);
        return createdUser?.role;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}

// Use Prisma Client to insert the new user into the database
async function insertNewUser(email: string, role: string): Promise<User | null> {
    if (!email && !role) {
        return null;
    }

    try {
        const createdUser = await prisma.user.create({
            data: {
                email,
                role
            },
        });

        console.log('New user created:', createdUser);
        return createdUser;
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }

    return null;
}

/**
 * 
 * GET user role
 * 
 * API http://localhost:3000/api/user/role?email=<email>
 * 
 * @param request 
 * @returns 
 */
export async function GET(request: Request): Promise<Response> {
    const requestURL = new URL(request.url)
    const email = requestURL.searchParams.get('email');
    if (email) {
        const role = await getRole("santokhan1999@gmail.com");
        if (role) {
            return Response.json({ role });
        } else {
            return Response.json({ message: "Can not get role." });
        }
    } else {
        return Response.json({ message: "Can not read email on searchParams." });
    }
}

/**
 * POST new user
 * 
 * API http://localhost:3000/api/user/role
 * 
 * Body { "email": "santokhan1999@gmail", "role": "super-admin" }
 * @param request 
 * @returns 
 */
export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    if (body.email && body.role) {
        const existUserRole = await getRole(body.email);
        if (existUserRole) {
            return Response.json({ message: 'User already exist.' });
        }
        const createdUser = await insertNewUser(body.email, body.role);
        if (createdUser) {
            return Response.json(createdUser);
        }
        return Response.json({ message: 'Can not create new user.' });
    } else {
        return Response.json({ message: 'User not read undefined of body.email and body.role' });
    }
}