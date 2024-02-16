import { prisma } from '@/lib/prisma';

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    console.log({ id });

    if (id) {
        const deletedAndroid = await prisma.stockAndroid.delete({
            where: { id }
        });
        if (deletedAndroid) {
            return Response.json({ message: 'Android deleted successfully' });
        } else {
            return Response.json({ message: 'Failed to delete android' });
        }
    } else {
        return Response.json({ message: 'Failed to delete android' });
    }
}
