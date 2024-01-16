'use client'

import CustomerForm from "@/components/form/customer/customer";
import SalesEntryForm from "@/components/form/sales/entry";
import { ReactNode } from "react";

export default async function Home({ children }: { children: ReactNode }) {
    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            <SalesEntryForm />
            <CustomerForm />
        </div>
    )
}

