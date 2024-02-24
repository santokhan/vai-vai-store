'use server';

import { getSalesMany } from "@/actions/sales/get";
import SalesTable from "@/block/sales/table/main";
import { SalesEntry } from "@/prisma/generated/client";

export default async function SalesTablePage() {
    const salesEntry: SalesEntry[] | undefined = await getSalesMany();

    if (salesEntry && salesEntry.length > 0) {
        return <SalesTable salesEntry={salesEntry} />
    } else {
        return null;
    }
}