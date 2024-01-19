'use client'

import { SellerTable } from "@/components/table/seller-table";
import { Seller } from "@/prisma/generated/client";
import { ORIGIN } from "@/utils/origin";
import { trim_input } from "@/utils/trim-input";
import { FormEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function SellerFormWithTable() {
    const [adding, setadding] = useState<boolean>(false);

    const sellerQuery = useQuery('getAllSellers', () =>
        fetch(`${ORIGIN}/api/add/seller/`).then(res => res.json()).then((data: Seller[]) => data)
    )

    async function postSeller(name: string) {
        if (!name) {
            console.log("Can not read undeifined type")
            return;
        }
        const response = await fetch(`${ORIGIN}/api/add/seller`, {
            method: 'POST',
            body: JSON.stringify({
                name: name
            })
        });
        const data = await response.json();
        console.log(data);
        setadding(false);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // <input name="type"/>
        const seller = formData.get('seller');
        if (typeof seller == 'string') {
            setadding(true);
            await postSeller(seller.trim().toLowerCase());
            await sellerQuery.refetch();
        }
    }

    return (
        !sellerQuery.isLoading &&
        <div className="">
            <div className="max-w-xl mx-auto space-y-6">
                <form className="bg-white p-6 rounded-xl space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full">
                            <label htmlFor="seller" className="default">Seller or Outlet</label>
                            <input
                                type="text"
                                id="seller"
                                name="seller"
                                className="default"
                                placeholder="Store 1"
                                required
                            />
                        </div>
                    </div>
                    <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                </form>
                {
                    sellerQuery.data &&
                    <div className="">
                        <SellerTable types={sellerQuery.data} />
                    </div>
                }
            </div>
        </div>
    )
}