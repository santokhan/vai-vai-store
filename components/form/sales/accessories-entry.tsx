'use client'

import Button from "@/components/button/button";
import SearchProductCard from "@/components/card/search-product-card";
import FormContainer from "@/components/form-container";
import ReactQueryContext from "@/context/react-query-context";
import { Customer, InStock, SalesEntry, Seller } from "@/prisma/generated/client";
import { InitialSalesEntry, initialCustomer } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
import { Add } from "iconsax-react";
import { ChangeEvent, useRef, useState } from "react";
import { useQuery } from "react-query";
import SearchByModel from "../search/search-by-model";
import FormTitle from "../title";
import CloseForm from "../close-form";

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

export default function AccessoriesSalesEntryForm({ onCloseForm }: { onCloseForm: () => void }) {
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
        <FormContainer>
            <div className="flex justify-between mb-2">
                <FormTitle>android entry</FormTitle>
                <CloseForm onClick={onCloseForm} />
            </div>
            <SearchByModel setSearchStockData={setSearchStockData} forwardRef={searchInputRef} />
            <form className="space-y-6" onSubmit={handleSubmit}>
                <Button variant="primary" disabled={adding}>
                    <Add />{adding ? "..." : "add"}
                </Button>
            </form>
        </FormContainer>
    )
}

