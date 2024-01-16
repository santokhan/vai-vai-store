'use client';

import SalesReturnForm from "@/block/form/sales/return";
import { ReactNode } from "react";

export default async function Home({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-3xl mx-auto space-y-4">
            <SalesReturnForm />
        </div>
    )
}