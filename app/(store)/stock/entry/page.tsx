'use client'

import StockEntryForm from "@/block/form/stock/entry";
import { ReactNode } from "react";

export default function Home() {
    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            <StockEntryForm />
        </div>
    )
}

