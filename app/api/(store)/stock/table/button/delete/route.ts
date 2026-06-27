import { getRole } from '@/actions/user/role';
import { authOptions } from '@/lib/auth/auth';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const role = email ? await getRole(email) : undefined;

    if (role !== 'super-admin') {
        return Response.json({ message: 'Forbidden.' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (id) {
        const deletedAndroid = await prisma.stockButton.delete({
            where: { id }
        });
        return Response.json({ message: deletedAndroid ? 'Deleted successfully.' : 'Failed to delete.' });
    } else {
        return Response.json({ message: 'Failed to delete.' });
    }
}
