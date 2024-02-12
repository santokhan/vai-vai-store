'use client';
import Button from "@/components/button/button";
import FormContainer from "@/components/form-container";
import { InStock } from "@/prisma/generated/client";
import { Add } from "iconsax-react";
import { ChangeEvent, useRef, useState } from "react";
import FormTitle from "../title";
import CloseForm from "../close-form";

export default function AccessoriesSalesEntryForm({ onCloseForm }: { onCloseForm: () => void }) {
    const [adding, setAdding] = useState(false);
    const [foundStockItem, setfoundStockItem] = useState<InStock | null>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    function setSearchStockData(data: InStock) {
        if (!data) return console.log({ message: "Can not read undefined of data" });
        setfoundStockItem(data)
    }

    async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setAdding(true);
        // Add data to sales entity
    }

    return (
        <FormContainer>
            <div className="flex justify-between mb-2">
                <FormTitle>android entry</FormTitle>
                <CloseForm onClick={onCloseForm} />
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <Button variant="primary" disabled={adding}>
                    <Add />{adding ? "..." : "add"}
                </Button>
            </form>
        </FormContainer>
    )
}

