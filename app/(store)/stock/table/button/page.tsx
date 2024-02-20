'use server';

import { getButtonMany } from "@/actions/stock/button/get";
import StockButtonTable from "@/block/add/stock/table/button";
import { StockButton } from "@/prisma/generated/client";

export default async function StockButtonTablePage() {
    const stockButton: StockButton[] | undefined = await getButtonMany();

    return (
        Array.isArray(stockButton) && <StockButtonTable stockButton={stockButton} />
    )
}

