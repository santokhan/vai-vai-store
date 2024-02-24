import { prisma } from "@/lib/prisma";


export type SummaryKeys = 'name' | 'amount';
export interface SummaryObj extends Record<SummaryKeys, string | number> { };
export type Summary = SummaryObj[];


async function getTotalPurchase() {
    try {
        const android = await prisma.stockAndroid.aggregate({
            _sum: {
                purchasePrice: true
            }
        });
        const button = await prisma.stockButton.aggregate({
            _sum: {
                purchasePrice: true
            }
        });
        const accessories = await prisma.stockAccessories.aggregate({
            _sum: {
                purchasePrice: true
            }
        });


        const x = android._sum.purchasePrice || 0,
            y = button._sum.purchasePrice || 0,
            z = accessories._sum.purchasePrice || 0;


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