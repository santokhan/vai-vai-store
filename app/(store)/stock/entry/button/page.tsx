'use server';
import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import StockButtonEntryForm from "@/block/form/stock/button-entry";

export default async function StockEntryPage() {
    // call server actions get data and pass to client component
    const productType = await getType();
    const brand = await getBrand();
    const model = await getModel();

    if (!productType || !brand || !model) {
        return null;
    } else {
        const filtered = productType.filter(product => product.type === 'button');
        return (
            <StockButtonEntryForm productType={filtered} brand={brand} model={model} />
        )
    }
}

