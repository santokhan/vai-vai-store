'use server';

import { getAccessoriesMany } from "@/actions/stock/accessories/get";
import StockTableAccessories from "@/block/add/stock/table/accessories";
import { StockAccessories } from "@/prisma/generated/client";

export default async function StockButtonTablePage() {
    const stockAccessories: StockAccessories[] | undefined = await getAccessoriesMany();

    return (
        Array.isArray(stockAccessories) && <StockTableAccessories stockAccessories={stockAccessories} />
    )
}

