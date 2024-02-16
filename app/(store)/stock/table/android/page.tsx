'use server'
import { getStockAndroidMany } from "@/actions/stock/get";
import StockTable from "@/block/add/stock/table/android";

export default async function StockAndroidTablePage({ params }: { params: { size: string; number: string } }) {
    const pageNumber = 1;
    const pageSize = 10;
    const stockAndroid = await getStockAndroidMany();

    if (stockAndroid && stockAndroid.length > 0) {
        return (
            <StockTable stockAndroid={stockAndroid} />
        )
    } else {
        return null;
    }
}

