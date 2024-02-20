'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteStockButton(id: string) {
    const deleted = await prisma.stockButton.delete({
        where: { id }
    });

    revalidatePath('/stock/table/button');

    return { message: deleted ? 'Deleted successfully.' : 'Failed to delete.' };
}
