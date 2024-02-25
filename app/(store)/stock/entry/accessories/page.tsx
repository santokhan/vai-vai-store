'use server';

import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import StockAccessoriesEntryForm from "@/block/form/stock/accessories-entry";

export default async function ButtonStockEntryPage() {
    const productType = await getType();
    const brand = await getBrand();
    const model = await getModel();

    if (!productType || !brand || !model) {
        return null;
    } else {
        const filtered = productType.filter(product => product.type === 'accessories');
        return (
            <StockAccessoriesEntryForm productType={filtered} brand={brand} model={model} />
        )
    }
}