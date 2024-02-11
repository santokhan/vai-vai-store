'use client'

import StockAccessoriesEntryForm from "@/block/form/stock/accessories-entry";
import StockAndroidEntryForm from "@/block/form/stock/android-entry";
import StockButtonEntryForm from "@/block/form/stock/button-entry";
import FormTitle from "@/components/form/title";
import ReactQueryContext from "@/context/react-query-context";
import { productTypes } from "@/utils/product-type";
import { Tab } from '@headlessui/react'
import Link from "next/link";

export default function StockEntryPage() {
    return (
        <StockAndroidEntryForm />
    )
}

