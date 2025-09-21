'use server';

import { prisma } from '@/lib/prisma';
import { Dealer } from '@/prisma/generated/client';

export async function getDealers(): Promise<Dealer[] | undefined> {
    try {
        const dealers: Dealer[] = await prisma.dealer.findMany();
        return dealers;
    } catch (error) {
        console.error('Error fetching dealers:', error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function getDealerById(id: string): Promise<Dealer | null | undefined> {
    try {
        const dealer: Dealer | null = await prisma.dealer.findUnique({
            where: { id },
        });
        return dealer;
    } catch (error) {
        console.error('Error fetching dealer by ID:', error);
    } finally {
        await prisma.$disconnect();
    }
}

// Updated to include phoneNumber and location
export async function createDealer(data: {
    name: string;
    description?: string;
    phoneNumber?: string;
    location?: string;
}): Promise<Dealer | undefined> {
    try {
        const newDealer: Dealer = await prisma.dealer.create({
            data: {
                name: data.name,
                description: data.description || null,
                phoneNumber: data.phoneNumber || null,
                location: data.location || null,
            },
        });
        return newDealer;
    } catch (error) {
        console.error('Error creating dealer:', error);
    } finally {
        await prisma.$disconnect();
    }
}
