'use server'

import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import StockAndroidEntryForm from "@/block/form/stock/android-entry";

export default async function StockAndroidEntryPage() {
    const productType = await getType();
    const brand = await getBrand();
    const model = await getModel();

    if (!productType || !brand || !model) {
        return null;
    } else {
        const filtered = productType.filter(product => product.type === 'accessories');
        return (
            <StockAndroidEntryForm productType={filtered} brand={brand} model={model} />
        )
    }
}

