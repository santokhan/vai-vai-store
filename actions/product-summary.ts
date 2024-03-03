import { prisma } from "@/lib/prisma";

async function getAvailableAndroid() {
    const android = await prisma.stockAndroid.findMany({
        where: {
            sold: false
        },
        select: {
            id: true
        }
    });
    return android.length;
}

async function getAvailableButton() {
    const android = await prisma.stockButton.findMany({
        select: {
            quantity: true
        }
    });
    return android.reduce((a, b) => a + b.quantity, 0);
}

async function getAvailableAccessories() {
    const android = await prisma.stockAccessories.findMany({
        select: {
            quantity: true
        }
    });
    return android.reduce((a, b) => a + b.quantity, 0);
}

export async function getProductSummary() {
    try {
        return {
            android: await getAvailableAndroid(),
            button: await getAvailableButton(),
            accessories: await getAvailableAccessories(),
        };
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}