'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

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
        revalidatePath('/user')
        return { message: createdUser ? "New user created." : "Failed to insert new user." };
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}


export async function removeUser(id: string) {
    try {
        const createdUser = await prisma.user.delete({
            where: { id },
        });
        revalidatePath('/user')
        return { message: createdUser ? "User has been deleted." : "Failed to delete user." };
    } catch (error) {
        console.error(error);
    } finally {
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