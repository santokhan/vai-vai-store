'use client';
import Button from "@/components/button/button";
import FormContainer from "@/components/form-container";
import { Customer, InStock } from "@/prisma/generated/client";
import { ORIGIN } from "@/utils/origin";
import { Add } from "iconsax-react";
import { ChangeEvent, useRef, useState } from "react";
import { useQuery } from "react-query";
import SearchByModel from "../search/search-by-model";
import FormTitle from "../title";
import CloseForm from "../close-form";

export default function ButtonSalesEntryForm({ onCloseForm }: { onCloseForm: () => void }) {
    const [adding, setAdding] = useState(false);
    const [foundStockItem, setfoundStockItem] = useState<InStock | null>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    // const { salesEntity, addToSales } = useSalesRowContext();

    function setSearchStockData(data: InStock) {
        if (!data) return console.log({ message: "Can not read undefined of data" });
        setfoundStockItem(data)
    }

    async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        // add to sale entity
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

