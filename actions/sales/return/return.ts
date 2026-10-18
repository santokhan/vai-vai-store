'use server';

import { prisma } from "@/lib/prisma"
import { Prisma, ProductType, ReturnHistory, SalesEntry } from "@/prisma/generated/client"

export async function addReturnAndroid(id: string): Promise<ReturnHistory | null> {
    if (!id) return null;
    return prisma.$transaction(async (tx) => {
        const stock = await tx.stockAndroid.findUnique({ where: { id } })
        if (!stock) throw new Error("Product not found")
        if (await tx.returnHistory.findFirst({ where: { stockId: id } })) throw new Error("This product has already been returned")
        if (!stock.sold) throw new Error("Product is not sold")
        await tx.stockAndroid.update({ where: { id }, data: { sold: false } })
        return tx.returnHistory.create({ data: { productTypeId: stock.productTypeId, stockId: stock.id } })
    })
}

interface ReturnHistoryData extends ReturnHistory {
    sale?: SalesEntry
    productType: ProductType
    stock?: Prisma.StockAndroidGetPayload<{ include: { brand: true; model: true } }>
        | Prisma.StockButtonGetPayload<{ include: { brand: true; model: true } }>
        | Prisma.StockAccessoriesGetPayload<{ include: { brand: true; model: true } }>
}

export async function getReturns({ take = 10, skip = 0 }): Promise<ReturnHistoryData[]> {
    try {
        const returns = await prisma.returnHistory.findMany({
            take, skip, orderBy: { createdAt: "desc" }, include: { productType: true }
        })
        return Promise.all(returns.map(async (item) => {
            const sale = item.salesId ? await prisma.salesEntry.findUnique({ where: { id: item.salesId } }) : undefined
            const include = { brand: true, model: true } as const
            const stock = await prisma.stockAndroid.findUnique({ where: { id: item.stockId }, include })
                ?? await prisma.stockButton.findUnique({ where: { id: item.stockId }, include })
                ?? await prisma.stockAccessories.findUnique({ where: { id: item.stockId }, include })
            return { ...item, sale: sale || undefined, stock: stock || undefined }
        }))
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function migrateReturns() {
    try {
        const sales = await prisma.salesEntry.findMany({ include: { salesItems: true } })
        const returns = await prisma.returnHistory.findMany()
        let migrated = 0
        for (const returnItem of returns) {
            const sale = sales.find((candidate) => {
                if (candidate.salesItems.some((item) => item.stockId === returnItem.stockId)) return true
                return Array.isArray(candidate.entity) && candidate.entity.some((entity) =>
                    entity !== null && typeof entity === "object" && !Array.isArray(entity) &&
                    "stockId" in entity && entity.stockId === returnItem.stockId
                )
            })
            if (sale && !returnItem.salesId) {
                await prisma.returnHistory.update({ where: { id: returnItem.id }, data: { salesId: sale.id } })
                migrated++
            }
        }
        return migrated
    } catch (error) {
        console.error(error)
        throw error
    }
}
