'use server';

import { getAllCost } from "@/actions/expenses/expenses";
import FilterableTable from "@/components/table/next-ui/cost-table";
import { TableTitle } from "@/components/table/table-header";

export default async function PageExpenses() {
    // const cost = await getAllCost();

    // if (!cost) {
    //     return null;
    // }

    return (
        <div className="rounded-xl bg-white p-4 lg:p-6 space-y-4">
            <TableTitle>Expenses Table</TableTitle>
            <FilterableTable />
        </div>
    )
}