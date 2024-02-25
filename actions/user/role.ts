'use server';

import { prisma } from '@/lib/prisma';

export async function getRole(email: string) {
    try {
        const founded = await prisma.user.findFirst({
            where: {
                email
            },
        });

        const role = founded?.role;

        if (role) {
            return role;
        } else {
            return { message: "User does not have any role with this email." };
        }
    } catch (error) {
        console.error(error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}


export async function insertNewUser(email: string, role: string) {
    try {
        const createdUser = await prisma.user.create({
            data: {
                email,
                role
            },
        });

        if (createdUser) {
            return createdUser;
        } else {
            return { message: "Failed to insert new user." };
        }
    } catch (error) {
        console.error(error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}


export async function getAllUser() {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}