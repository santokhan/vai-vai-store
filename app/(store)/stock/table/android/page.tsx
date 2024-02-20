'use server';

import { getStockAndroidMany } from "@/actions/stock/get";
import StockAndroidTable from "@/block/add/stock/table/android";
import { StockAndroid } from "@/prisma/generated/client";

export default async function StockAndroidTablePage() {
    const stockAndroid: StockAndroid[] | undefined = await getStockAndroidMany();

    return (
        Array.isArray(stockAndroid) && <StockAndroidTable stockAndroid={stockAndroid} />
    )
}


