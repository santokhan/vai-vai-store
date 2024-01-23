'use client';

import StockTable from "@/block/add/stock/table/main";
import ReactQueryContext from "@/context/react-query-context";

export default function Home() {
    return (
        <ReactQueryContext>
            <StockTable />
        </ReactQueryContext>
    )
}