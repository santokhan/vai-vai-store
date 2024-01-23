'use client';

import SalesTable from "@/block/sales/table/main";
import ReactQueryContext from "@/context/react-query-context";

export default function SalesTablePage() {
    return (
        <ReactQueryContext>
            <SalesTable />
        </ReactQueryContext>
    )
}