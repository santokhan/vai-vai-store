import { prisma } from '@/lib/prisma';

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (id) {
        const deletedAndroid = await prisma.salesEntry.delete({
            where: { id }
        });
        if (deletedAndroid) {
            return Response.json({ message: 'Sales deleted successfully' });
        } else {
            return Response.json({ message: 'Failed to delete sales' });
        }
    } else {
        return Response.json({ message: 'Failed to delete sales' });
    }
}
