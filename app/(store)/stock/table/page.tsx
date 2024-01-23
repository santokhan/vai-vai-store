'use client';

import StockTable from "@/block/add/stock/table/main";
import ReactQueryContext from "@/context/react-query-context";
import { InStock } from "@/prisma/generated/client";
import { dummyProductData } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
import { useQuery } from "react-query";

export default function Home() {
    return (
        <ReactQueryContext>
            <StockTable />
        </ReactQueryContext>
    )
}