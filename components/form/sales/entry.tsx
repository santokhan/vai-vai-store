'use client'

import SearchProductCard from "@/components/card/search-product-card";
import CustomerForm from "@/components/form/customer/customer";
import SearchModelForm from "@/components/form/search/product-search";
import { PRINT } from "@/components/print";
import ReactQueryContext from "@/context/react-query-context";
import { Customer, InStock, SalesEntry, Seller } from "@/prisma/generated/client";
import { InitialSalesEntry, dummyStockData, initialCustomer } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";

export type SalesEntryType = typeof InitialSalesEntry;
export type CustomerData = typeof initialCustomer;
export type PostSalesData = {
    customer: CustomerData
    discount: number,
    due: number,
    IMEI: string,
    instockId: string,
    price: number,
    sellerId: string,
};

export default function SalesEntryForm() {
    const [adding, setAdding] = useState(false);
    const [salesData, setsalesData] = useState<SalesEntryType>(InitialSalesEntry);
    const [foundStockItem, setfoundStockItem] = useState<InStock | null>(null);
    const [addedSales, setaddedSales] = useState<SalesEntry | null>(null);
    const [customer, setcustomer] = useState<CustomerData>(initialCustomer);

    function setSearchStockData(data: InStock) {
        if (!data) return console.log({ message: "Can not read undefined of data" });
        setfoundStockItem(data)
    }

    /**
     * setState({ ...state, [key]: value})
     * 
     * @param key 
     * @param value 
     */
    function setCustomerData(key: string, value: string) {
        setcustomer({ ...customer, [key]: value })
    }

    async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const { discount, sellerId } = salesData;
        if (foundStockItem?.id && customer) {
            setAdding(true);
            // TODO: add sales entry
            const API_URL = `${ORIGIN}/api/sales/entry/`

            /**
             * Required data to add sales entrys
             */
            const body: PostSalesData = {
                discount,
                sellerId,
                IMEI: foundStockItem.IMEI,
                instockId: foundStockItem.id,
                price: foundStockItem.price,
                due: salesData.due,
                customer,
            }

            await fetch(API_URL, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(body)
            }).then(res => res.json()).then((data: SalesEntry) => {
                setAdding(false);
                setaddedSales(data);
            }).catch(err => {
                console.error(err);
            })
            setAdding(false);
        }
    }

    const sellerQuery = useQuery('getAllCustomer', () =>
        fetch(`${ORIGIN}/api/add/seller/`).then(res => res.json()).then((data: Customer[]) => data)
    )

    return (
        <ReactQueryContext>
            <div className="mx-auto bg-white p-6 rounded-xl space-y-6">
                <SearchModelForm setSearchStockData={setSearchStockData} />
                <SearchProductCard data={foundStockItem} />

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        <div className='w-full'>
                            <label htmlFor="seller" className="default">Seller</label>
                            <select
                                className="default"
                                name="seller"
                                id="seller"
                                required={true}
                                value={salesData.sellerId}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => { setsalesData({ ...salesData, sellerId: e.target.value }) }}>
                                <option value="" disabled className='capitalize'>default</option>
                                {sellerQuery.data?.map((type: Seller, idx) =>
                                    <option className='capitalize' value={type.id} key={idx}>{type.name}</option>
                                )}
                            </select>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="discount" className="default">discount</label>
                            <input
                                type='number'
                                className="default"
                                name="discount"
                                id="discount"
                                value={salesData.discount}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setsalesData({ ...salesData, discount: Number(e.target.value) })
                                }}>
                            </input>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="due" className="default">due</label>
                            <input
                                type='number'
                                className="default"
                                name="due"
                                id="due"
                                value={salesData.due}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setsalesData({ ...salesData, due: Number(e.target.value) })
                                }}>
                            </input>
                        </div>
                    </div>

                    <CustomerForm setCustomerData={setCustomerData} />
                    <div className="flex justify-end+">
                        <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                    </div>
                </form>
                {/* <PRINT data={salesData} /> */}
            </div>
        </ReactQueryContext >
    )
}

