'use client'

import SellerFormWithTable from "@/block/add/seller/seller";
import ReactQueryContext from "@/context/react-query-context";

export default function TypePage() {
    return (
        <ReactQueryContext>
            <SellerFormWithTable />
        </ReactQueryContext>
    )
}