'use client'

import SellerFormWithTable from "@/block/add/seller/seller";
import { SellerTable } from "@/components/table/seller-table";
import ReactQueryContext from "@/context/react-query-context";
import { Seller } from "@/prisma/generated/client";
import { FormEvent, useEffect, useState } from "react";

export default function TypePage() {
    const [seller, setseller] = useState<Seller[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [adding, setadding] = useState<boolean>(false);

    return (
        <ReactQueryContext>
            <SellerFormWithTable />
        </ReactQueryContext>
    )
}