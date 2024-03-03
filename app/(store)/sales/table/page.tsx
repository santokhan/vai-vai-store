'use server';

import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import { SalesInclude_C_S, getSalesMany } from "@/actions/sales/get";
import SalesTable from "@/block/sales/table/main";

export default async function SalesTablePage() {
    const salesEntry: SalesInclude_C_S[] | undefined = await getSalesMany();
    const productTypes = await getType();
    const brands = await getBrand();
    const models = await getModel();

    if (salesEntry && salesEntry.length > 0 && productTypes && brands && models) {
        return <SalesTable salesEntry={salesEntry} typeBrandModel={{ productTypes, brands, models }} />
    } else {
        return null;
    }
} 