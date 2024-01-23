'use client'

import SalesEntryForm from "@/components/form/sales/entry";
import ReactQueryContext from "@/context/react-query-context";

export default function SalesEntryPage() {
    return (
        <ReactQueryContext>
            <h3 className="text-xl font-semibold">Sales Entry</h3>
            <SalesEntryForm />
        </ReactQueryContext>
    )
}

