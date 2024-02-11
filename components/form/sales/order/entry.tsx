'use client'

import SearchProductCard from "@/components/card/search-product-card";
import CustomerForm from "@/components/form/customer/customer";
import SearchModelForm from "@/components/form/search/product-search";
import { PRINT } from "@/components/print";
import ReactQueryContext from "@/context/react-query-context";
import { Customer, InStock, SalesEntry, Seller } from "@/prisma/generated/client";
import { InitialSalesEntry, dummyStockData, initialCustomer } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
import { ChangeEvent, useRef, useState } from "react";
import { useQuery } from "react-query";
import InputBox from "../../input-box";

export type SalesEntryType = typeof InitialSalesEntry;
export type CustomerData = typeof initialCustomer;

// Copy type from SalesEntry
export type PostSalesData = {
    discount: number;
    due: number;
    sellerId: string;
    // customerId: string; // added from backend
    instockId: string;
    stockAndroidId: string | null;
    stockButtonId: string | null;
    stockAccessoriesId: string | null;
};

export default function SalesEntryForm() {
    const [adding, setAdding] = useState(false);
    const [salesData, setsalesData] = useState<SalesEntryType>(InitialSalesEntry);
    const [foundStockItem, setfoundStockItem] = useState<InStock | null>(null);
    const [addedSales, setaddedSales] = useState<SalesEntry | null>(null);
    const [customer, setcustomer] = useState<CustomerData>(initialCustomer);
    const searchInputRef = useRef<HTMLInputElement | null>(null);

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
        if (!foundStockItem?.id) {
            alert('Please search product first');
            searchInputRef.current?.focus()
        } else if (foundStockItem?.id && customer) {
            setAdding(true);
            // TODO: add sales entry
            const API_URL = `${ORIGIN}/api/sales/entry/`

            /**
             * Required data to add sales entrys
             * 
             * CustomerId will be added on backend🌟
             */
            const body: PostSalesData = {
                discount,
                sellerId,
                due: salesData.due,
                instockId: foundStockItem.id,
                stockAndroidId: null,
                stockButtonId: null,
                stockAccessoriesId: null
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
        fetch(`${ORIGIN}/api/add/seller/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: Customer[]) => data)
    )

    return (
        <ReactQueryContext>
            <div className="mx-auto bg-white p-6 rounded-xl space-y-6">
                <SearchModelForm setSearchStockData={setSearchStockData} forwardRef={searchInputRef} />
                <SearchProductCard data={foundStockItem} />

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        <InputBox>
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
                        </InputBox>
                        <InputBox>
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
                        </InputBox>
                        <InputBox>
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
                        </InputBox>
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

