'use client';
import Button from "@/components/button/button";
import SearchProductCard from "@/components/card/search-product-card";
import FormContainer from "@/components/form-container";
import { StockAndroid } from "@/prisma/generated/client";
import { ChangeEvent, useRef, useState } from "react";
import AndroidIMEISearch from "../search/android-imei-search";
import { SalesRowEntry, useSalesRowContext } from "@/context/sales-context";
import FormTitle from "../title";
import CloseForm from "../close-form";

export default function AndroidSalesEntryForm({ onCloseForm }: { onCloseForm: () => void }) {
    const [foundStockItem, setfoundStockItem] = useState<StockAndroid | null>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const { addToSales } = useSalesRowContext();

    function setSearchStockData(data: StockAndroid) {
        if (!data) {
            return console.error({ message: "Can not read undefined of data" });
        } else {
            setfoundStockItem(data)
        }
    }

    async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (foundStockItem?.id) {
            addToSales({
                stockId: foundStockItem.id,
                quantity: 1,
                type: 'android',
            } as SalesRowEntry);
            onCloseForm();
        } else {
            alert('Please search product first');
            searchInputRef.current?.focus()
        }
    }

    return (
        <FormContainer>
            <div className="flex justify-between mb-2">
                <FormTitle>android entry</FormTitle>
                <CloseForm onClick={onCloseForm} />
            </div>
            <AndroidIMEISearch setSearchStockData={setSearchStockData} forwardRef={searchInputRef} />
            {
                foundStockItem?.id &&
                <SearchProductCard data={{
                    name: foundStockItem.name,
                    sellingPrice: foundStockItem.sellingPrice,
                    color: foundStockItem.color,
                    ram: foundStockItem.ram || '',
                    rom: foundStockItem.rom || ''
                }} />
            }
            <form className="space-y-6" onSubmit={handleSubmit}>
                <Button variant="primary">add</Button>
            </form>
        </FormContainer>
    )
}

