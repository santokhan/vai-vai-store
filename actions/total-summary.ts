import { prisma } from "@/lib/prisma";


export type SummaryKeys = 'name' | 'amount';
export interface SummaryObj extends Record<SummaryKeys, string | number> { };
export type Summary = SummaryObj[];


async function getTotalPurchase() {
    try {
        // does not have quantity
        const android = await prisma.stockAndroid.aggregate({
            _sum: {
                purchasePrice: true
            }
        });
        // multiply with quantity
        const button = await prisma.stockButton.findMany({
            select: {
                purchasePrice: true,
                quantity: true
            }
        });
        // multiply with quantity
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


async function getTotalSales() {
    try {
        // const sales = await prisma.salesEntry.findMany({
        //     select: {
        //         entity: true
        //     }
        // });

        // const salesIncludeStock = sales.map(async ({ entity }) => {
        //     if (entity === 'android') {

        //     }
        // })

        return 0;
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


export async function actionTotalSummary(): Promise<Record<'purchase' | 'sales' | 'due', number> | undefined> {
    try {
        const purchase = await getTotalPurchase();
        const sales = await getTotalSales();
        const due = await getTotalDue();

        return { purchase, sales, due };
    } catch (error) {
        throw error;
    }
}