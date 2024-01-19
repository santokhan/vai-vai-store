'use client'

import StockEntryForm from "@/block/form/stock/entry";
import ReactQueryContext from "@/context/react-query-context";
import { ReactNode } from "react";

export default function StockEntryPage() {
    return (
        <ReactQueryContext>
            <div className="space-y-4 mx-auto">
                <StockEntryForm />
            </div>
        </ReactQueryContext>
    )
}

