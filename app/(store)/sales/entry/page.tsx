'use client'

import CustomerForm from "@/components/form/customer/customer";
import SalesEntryForm from "@/components/form/sales/entry";

export default function Home() {
    return (
        <div className="space-y-4 mx-auto">
            <div className="bg-white p-6 rounded-xl space-y-6">
                <SalesEntryForm />
                <CustomerForm />
            </div>
        </div>
    )
}

