'use client'

import Button from "@/components/button/button";
import FormContainer from "@/components/form-container";
import ReactQueryContext from "@/context/react-query-context";
import { Customer, InStock, SalesEntry, Seller } from "@/prisma/generated/client";
import { InitialSalesEntry, initialCustomer } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
import { Add } from "iconsax-react";
import { ChangeEvent, useRef, useState } from "react";
import { useQuery } from "react-query";
import SearchByModel from "../search/search-by-model";
import { useSalesRowContext } from "@/context/sales-context";

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

export default function ButtonSalesEntryForm({ onCloseForm }: { onCloseForm: () => void }) {
    const [adding, setAdding] = useState(false);
    const [salesData, setsalesData] = useState<SalesEntryType>(InitialSalesEntry);
    const [foundStockItem, setfoundStockItem] = useState<InStock | null>(null);
    const [addedSales, setaddedSales] = useState<SalesEntry | null>(null);
    const [customer, setcustomer] = useState<CustomerData>(initialCustomer);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    // const { salesEntity, addToSales } = useSalesRowContext();

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
        // onCloseForm()
    }

    const sellerQuery = useQuery('getAllCustomer', () =>
        fetch(`${ORIGIN}/api/add/seller/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: Customer[]) => data)
    )

    return (
        <ReactQueryContext>
            <FormContainer>
                <SearchByModel setSearchStockData={setSearchStockData} forwardRef={searchInputRef} />

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

                    <div className="flex justify-end+">
                        <Button variant="primary" disabled={adding}>
                            <Add />{adding ? "..." : "add"}
                        </Button>
                    </div>
                </form>
            </FormContainer>
        </ReactQueryContext >
    )
}

