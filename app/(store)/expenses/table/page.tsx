'use server';

import { getAllCost } from "@/actions/expenses/expenses";
import { TableTitle } from "@/components/table/table-header";
import { TableFooterContainer } from "@/components/table/tanstack/table-footer";

export default async function PageExpenses() {
    const cost = await getAllCost();

    if (!cost) {
        return null;
    }

    return (
        <div className="rounded-xl bg-white p-4 lg:p-6 space-y-4">
            <TableTitle>Expenses Table</TableTitle>
            <pre>{JSON.stringify(cost, null, 2)}</pre>
        </div>
    )
}