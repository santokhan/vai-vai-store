'use server';

import { getRole } from '@/actions/user/role';
import { authOptions } from '@/lib/auth/auth';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

export async function deleteStockButton(id: string) {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const role = email ? await getRole(email) : undefined;

    if (role !== 'super-admin') {
        return { message: 'Forbidden.' };
    }

    const deleted = await prisma.stockButton.delete({
        where: { id }
    });

    revalidatePath('/stock/table/button');

    return { message: deleted ? 'Deleted successfully.' : 'Failed to delete.' };
}
