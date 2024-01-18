'use client';

import BrandFormWithTable from "@/block/brand/brand-form";
import ReactQueryContext from "@/context/react-query-context";

export default function AddBrandPage() {
    return (
        <ReactQueryContext>
            <BrandFormWithTable />
        </ReactQueryContext>
    )
}