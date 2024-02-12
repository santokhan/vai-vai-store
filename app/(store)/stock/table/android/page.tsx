'use server'
import { getStockAndroidMany } from "@/actions/stock/get";
import StockTable from "@/block/add/stock/table/android";

export default async function StockAndroidTablePage() {
    const stockAndroid = await getStockAndroidMany();
    if (stockAndroid && stockAndroid.length > 0) {
        return (
            <StockTable stockAndroid={stockAndroid} />
        )
    } else {
        return null;
    }
}

