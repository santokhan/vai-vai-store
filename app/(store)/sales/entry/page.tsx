'use server';

import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import SalesEntryForm from "@/components/form/sales/sales-entry";
import CustomerProvider from "@/context/customer-context";
import SalesRowProvider from "@/context/sales-context";
import SellerProvider from "@/context/seller-context";

export default async function SalesEntryPage() {
    const productType = await getType();
    const brand = await getBrand();
    const model = await getModel();

    if (!productType || !brand || !model) {
        return null;
    }

    return (
        <SalesRowProvider>
            <CustomerProvider>
                <SellerProvider>
                    <SalesEntryForm productType={productType} brand={brand} model={model} />
                </SellerProvider>
            </CustomerProvider>
        </SalesRowProvider>
    )
}