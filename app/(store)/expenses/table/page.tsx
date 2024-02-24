'use server';

import { TableTitle } from "@/components/table/table-header";
import { TableFooterContainer } from "@/components/table/tanstack/table-footer";

export default async function PageExpenses() {
    return (
        <div className="rounded-xl bg-white p-4 lg:p-6 space-y-4">
            <TableTitle>Expenses Table</TableTitle>
        </div>
    )
}