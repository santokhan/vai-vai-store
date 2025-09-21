'use client'

import DealerFormWithTable from "@/block/add/dealer";
import ReactQueryContext from "@/context/react-query-context";

export default function TypePage() {
    return (
        <ReactQueryContext>
            <DealerFormWithTable />
        </ReactQueryContext>
    )
}