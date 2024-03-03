'use server';

import { AccIncBM, getAccessoriesMany } from "@/actions/stock/accessories/get";
import StockTableAccessories from "@/block/add/stock/table/accessories";

export default async function StockButtonTablePage() {
    const stockAccessories: AccIncBM[] | undefined = await getAccessoriesMany();

    return (
        Array.isArray(stockAccessories) && <StockTableAccessories stockAccessories={stockAccessories} />
    )
}

