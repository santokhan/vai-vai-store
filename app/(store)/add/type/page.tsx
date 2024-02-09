'use client'

import { trim_input } from "@/utils/trim-input";
import { FormEvent, useEffect, useState } from "react";
import { ORIGIN } from "@/utils/origin";
import { ProductType } from "@/prisma/generated/client";
import { TypeTable } from "@/components/table/product-type-table";

export default function TypePage() {
    const [types, setTypes] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [adding, setadding] = useState<boolean>(false);

    async function getAllProductTypes() {
        const response = await fetch(`${ORIGIN}/api/add/type/`, {
            cache: 'no-store'
        });
        const data = await response.json();
        setTypes(data);
        setLoading(false);
    }

    useEffect(() => {
        getAllProductTypes();
    }, []);

    async function postType(type: string) {
        if (!type) {
            console.log("Can not read undeifined type")
            return;
        }
        const response = await fetch(`${ORIGIN}/api/add/type/`, {
            method: 'POST',
            body: JSON.stringify({
                type: type
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
        const type = formData.get('type');
        if (typeof type == 'string') {
            // adding data to server;
            setadding(true);

            await postType(trim_input(type));
            await getAllProductTypes();
        }
    }

    return (
        !loading &&
        <div className="">
            <div className="space-y-6">
                <form className="bg-white p-6 rounded-xl space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full">
                            <label htmlFor="type" className="default">Add Product Type or Category</label>
                            <input
                                type="text"
                                id="type"
                                name="type"
                                className="default"
                                placeholder="Phone, Laptop, etc"
                                required
                            />
                        </div>
                    </div>
                    <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                </form>
                <div className="">
                    <TypeTable types={types} />
                </div>
            </div>
        </div>
    )
}