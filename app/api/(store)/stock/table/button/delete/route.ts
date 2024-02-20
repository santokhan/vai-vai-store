import { prisma } from '@/lib/prisma';

export async function DELETE(request: Request) {
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
