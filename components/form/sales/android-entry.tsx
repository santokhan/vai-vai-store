'use client'

import Button from "@/components/button/button";
import SearchProductCard from "@/components/card/search-product-card";
import FormContainer from "@/components/form-container";
import CustomerForm from "@/components/form/customer/customer";
import ReactQueryContext from "@/context/react-query-context";
import { Customer, SalesEntry, Seller, StockAndroid } from "@/prisma/generated/client";
import { InitialSalesEntry, initialCustomer } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
// import { Add } from "iconsax-react";
import { ChangeEvent, useRef, useState } from "react";
import { useQuery } from "react-query";
import AndroidIMEISearch from "../search/android-imei-search";
import InputBox from "../input-box";
import { SalesRowEntry, useSalesRowContext } from "@/context/sales-context";

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

export default function AndroidSalesEntryForm({ onCloseForm }: { onCloseForm: () => void }) {
    const [adding, setAdding] = useState(false);
    const [salesData, setsalesData] = useState<SalesEntryType>(InitialSalesEntry);
    const [foundStockItem, setfoundStockItem] = useState<StockAndroid | null>(null);
    // const [addedSales, setaddedSales] = useState<SalesEntry | null>(null);
    const [customer, setcustomer] = useState<CustomerData>(initialCustomer);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const { addToSales } = useSalesRowContext();

    function setSearchStockData(data: StockAndroid) {
        if (!data) return console.error({ message: "Can not read undefined of data" });
        console.log({ data });
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
            addToSales({
                stockId: foundStockItem.id,
                quantity: 1,
                discount,
                due: salesData.due,
                type: 'android',
                sellerId: sellerId
            } as SalesRowEntry);
            // setAdding(true);
            // const API_URL = `${ORIGIN}/api/sales/entry/`
            // const body: PostSalesData = {
            //     discount,
            //     sellerId,
            //     IMEI: foundStockItem.IMEI,
            //     instockId: foundStockItem.id,
            //     price: foundStockItem.sellingPrice,
            //     due: salesData.due,
            //     customer,
            // }

            // await fetch(API_URL, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(body)
            // }).then(res => res.json()).then((data) => {
            //     setAdding(false);
            //     // alert(data.message);
            // }).catch(err => {
            //     console.error(err);
            // })
        }
        onCloseForm()
    }

    const sellerQuery = useQuery('getAllCustomer', () =>
        fetch(`${ORIGIN}/api/add/seller/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: Customer[]) => data)
    )

    return (
        <ReactQueryContext>
            <FormContainer>
                <AndroidIMEISearch setSearchStockData={setSearchStockData} forwardRef={searchInputRef} />
                {
                    foundStockItem?.id &&
                    <SearchProductCard data={{
                        name: foundStockItem.name,
                        sellingPrice: foundStockItem.sellingPrice,
                        color: foundStockItem.color,
                        ram: foundStockItem.ram || "",
                        rom: foundStockItem.rom || ''
                    }} />
                }

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
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setsalesData({ ...salesData, discount: Number(e.target.value) })
                                }}
                                placeholder="0"
                                value={salesData.discount || ''}
                            >
                            </input>
                        </InputBox>
                        <InputBox>
                            <label htmlFor="due" className="default">due</label>
                            <input
                                type='number'
                                className="default"
                                name="due"
                                id="due"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setsalesData({ ...salesData, due: Number(e.target.value) })
                                }}
                                placeholder="0"
                                value={salesData.due || ''}
                            >
                            </input>
                        </InputBox>
                    </div>

                    <div className="flex justify-end+">
                        <Button variant="primary" disabled={adding}>
                            {adding ? "adding..." : "add"}
                        </Button>
                    </div>
                </form>
            </FormContainer>
        </ReactQueryContext >
    )
}

