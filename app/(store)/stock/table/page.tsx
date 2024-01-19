'use client';

import StockTable from "@/block/add/stock/table/main";

export default function Home() {
    return (
        <div className="rounded-xl bg-white w-full p-6 space-y-6">
            <StockTable />
        </div>
    )
}