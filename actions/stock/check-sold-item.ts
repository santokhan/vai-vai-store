'use server';

import { prisma } from "@/lib/prisma";

export const checkSoldItem = async (IMEI: string) => {
    if (!IMEI) throw new Error('Invalid IMEI');

    const stock = await prisma.stockAndroid.findUnique({
        where: {
            IMEI
        },
        include: {
            productType: true,
            model: true,
            brand: true,
        }
    })

    // when item not sold
    if (stock?.sold === false) throw new Error('Product not sold yet');

    // when item sold it is available for return
    return stock
}