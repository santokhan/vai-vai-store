'use server';

import { BtnIncBM, getButtonMany } from "@/actions/stock/button/get";
import StockButtonTable from "@/block/add/stock/table/button";

export default async function StockButtonTablePage() {
    const stockButton: BtnIncBM[] | undefined = await getButtonMany();

    return (
        Array.isArray(stockButton) && <StockButtonTable stockButton={stockButton} />
    )
}

