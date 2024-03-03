'use server';

import { StockButtonIncludeBrandModel, getButtonMany } from "@/actions/stock/button/get";
import StockButtonTable from "@/block/add/stock/table/button";

export default async function StockButtonTablePage() {
    const stockButton: StockButtonIncludeBrandModel[] | undefined = await getButtonMany();

    return (
        Array.isArray(stockButton) && <StockButtonTable stockButton={stockButton} />
    )
}

