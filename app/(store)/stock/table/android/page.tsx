'use server';

import { getStockAndroidMany } from "@/actions/stock/get";
import StockTable from "@/block/add/stock/table/android";
import { StockAndroid } from "@/prisma/generated/client";

export default async function StockAndroidTablePage() {
    const stockAndroid: StockAndroid[] | undefined = await getStockAndroidMany();

    return (
        Array.isArray(stockAndroid) && <StockTable stockAndroid={stockAndroid} />
    )
}


