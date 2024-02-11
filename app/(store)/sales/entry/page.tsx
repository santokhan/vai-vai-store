'use client'
import SalesEntryForm from "@/components/form/sales/sales-entry";
import SalesRowProvider from "@/context/sales-context";

export default function SalesEntryPage() {
    return (
        <SalesRowProvider>
            <SalesEntryForm />
        </SalesRowProvider>
    )
}