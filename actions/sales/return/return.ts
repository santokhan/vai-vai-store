'use server';

import { prisma } from "@/lib/prisma"
import { ReturnHistory } from "@/prisma/generated/client"

export async function addReturnAndroid(id: string): Promise<ReturnHistory | null> {
    if (!id) return null;

    // make stock return
    const returned = await prisma.stockAndroid.update({
        where: {
            id
        },
        data: {
            sold: false
        }
    })

    // add to return history
    const addToReturnHistory = await prisma.returnHistory.create({
        data: {
            productTypeId: returned.productTypeId,
            stockId: returned.id
        }
    })

    return addToReturnHistory
}