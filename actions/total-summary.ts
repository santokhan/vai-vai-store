import { prisma } from "@/lib/prisma";
import { JsonValue } from "@/prisma/generated/client/runtime/library";


export type SummaryKeys = 'name' | 'amount';
export interface SummaryObj extends Record<SummaryKeys, string | number> { };
export type Summary = SummaryObj[];


async function getStockTotalPurchase() {
    try {
        // does not have quantity
        const android = await prisma.stockAndroid.aggregate({
            where: {
                sold: false
            },
            _sum: {
                purchasePrice: true
            }
        });

        const button = await prisma.stockButton.findMany({
            select: {
                purchasePrice: true,
                quantity: true
            }
        });

        const accessories = await prisma.stockAccessories.findMany({
            select: {
                purchasePrice: true,
                quantity: true
            }
        });

        const x = android._sum.purchasePrice || 0,
            y = button.map(({ purchasePrice, quantity }) => purchasePrice * quantity).reduce((a, b) => a + b, 0) || 0,
            z = accessories.map(({ purchasePrice, quantity }) => purchasePrice * quantity).reduce((a, b) => a + b, 0) || 0;

        return x + y + z;
    } catch (error) {
        throw error;
    }
}

async function getHistoryTotalPurchase() {
    try {
        // does not have quantity
        const android = await prisma.historyAndroidStock.aggregate({
            _sum: {
                purchasePrice: true
            }
        });
        // multiply with quantity
        const button = await prisma.historyButtonStock.findMany({
            select: {
                purchasePrice: true,
                quantity: true
            }
        });
        // multiply with quantity
        const accessories = await prisma.historyAccessoriesStock.findMany({
            select: {
                purchasePrice: true,
                quantity: true
            }
        });

        const x = android._sum.purchasePrice || 0,
            y = button.map(({ purchasePrice, quantity }) => purchasePrice * quantity).reduce((a, b) => a + b, 0) || 0,
            z = accessories.map(({ purchasePrice, quantity }) => purchasePrice * quantity).reduce((a, b) => a + b, 0) || 0;

        return x + y + z;
    } catch (error) {
        throw error;
    }
}

function JSONValueToJS(prismaJSONValue: { entity: JsonValue }[]) {
    return prismaJSONValue.map(({ entity }) => JSON.parse(JSON.stringify(entity)) as any[]);
}

async function getTotalSales() {
    try {
        const sales = await prisma.salesEntry.findMany({
            select: {
                entity: true
            }
        });

        if (sales.length === 0) {
            return 0;
        }

        const salesIncludeStock = JSONValueToJS(sales).map((arr): number | number[] => {
            //    here android quantity is = 1  and button and accessories quantity is = 1 or more
            if (Array.isArray(arr)) {
                return arr.map((e) => {
                    const quantity = e.quantity || 0;
                    const price = e.price || 0;
                    return quantity * price;
                }).flat();
            } else {
                return 0;
            }
        }).filter(e => e);

        const totalSalesPrice = salesIncludeStock.flat().reduce((acc, counter) => acc + counter, 0)
        // console.log(salesIncludeStock, totalSalesPrice);

        return totalSalesPrice;
    } catch (error) {
        throw error;
    }
}


async function getTotalDue() {
    try {
        const sales = await prisma.salesEntry.aggregate({
            _sum: {
                due: true
            }
        });


        return sales._sum.due || 0;
    } catch (error) {
        throw error;
    }
}

export type TotalSummaryKey = 'purchase' | 'sales' | 'due' | 'availablePurchase';
export type TotalSummary = Record<TotalSummaryKey, number>

export async function actionTotalSummary(): Promise<TotalSummary | undefined> {
    try {
        const purchase = await getHistoryTotalPurchase();
        const sales = await getTotalSales();
        const due = await getTotalDue();
        const availablePurchase = await getStockTotalPurchase();

        console.log(availablePurchase);

        return { purchase, sales, due, availablePurchase };
    } catch (error) {
        throw error;
    }
}