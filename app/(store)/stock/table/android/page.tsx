'use server';

import { StockAndroidInclude, getStockAndroidMany } from "@/actions/stock/get";
import StockAndroidTable from "@/block/add/stock/table/android";

export default async function StockAndroidTablePage() {
    const stockAndroid: StockAndroidInclude[] | undefined = await getStockAndroidMany();

    return (
        Array.isArray(stockAndroid) && <StockAndroidTable stockAndroid={stockAndroid} />
    )
}


