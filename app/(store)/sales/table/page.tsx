'use server';

import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import { getSalesMany } from "@/actions/sales/get";
import SalesTable from "@/block/sales/table/main";
import { SalesEntry } from "@/prisma/generated/client";

export default async function SalesTablePage() {
    const salesEntry: SalesEntry[] | undefined = await getSalesMany();
    const productTypes = await getType();
    const brands = await getBrand();
    const models = await getModel();

    if (salesEntry && salesEntry.length > 0 && productTypes && brands && models) {
        return <SalesTable salesEntry={salesEntry} typeBrandModel={{ productTypes, brands, models }} />
    } else {
        return null;
    }
} 