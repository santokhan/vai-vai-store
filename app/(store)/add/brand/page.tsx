'use client';

import SelectOption from "@/components/form/select-option/select-option";
import SubmitButton from "@/components/form/submit";
import { ProductType } from "@/prisma/generated/client";
import { ORIGIN } from "@/utils/origin";
import { trim_input } from "@/utils/trim-input";
import { FormEvent, useEffect, useState } from "react";

export const defaultType = [
    'android',
    'button',
    'accessories',
]

export default function TypePage() {
    const [type, setType] = useState<string[] | null>(null);
    const [loading, setloading] = useState<boolean>(true);
    const [selectedType, setselectedType] = useState<string>("");

    useEffect(() => {
        async function getProductType() {
            const response = await fetch(`${ORIGIN}/api/add/brand/`);
            const data = await response.json();
            // console.log(data);
            setType(data.map((item: ProductType) => item.type));
            setloading(false);
        }

        getProductType();

        return () => {
            setType(null)
        }
    }, [])

    async function postBrand(type: string, brand: string) {
        if (!type && !brand) {
            console.log("Can not read undeifined type")
            return;
        }
        const response = await fetch(`${ORIGIN}/api/add/type/`, {
            method: 'POST',
            body: JSON.stringify({
                type: type,
                brand: type
            })
        });
        const data = await response.json();
        console.log(data);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const productType = formData.get('productType');
        const brand = formData.get('brand');

        alert(`type: ${productType} brand: ${brand}`)

        if (typeof productType == 'string' && typeof brand == 'string') {
            postBrand(productType, trim_input(brand));
        }
    }

    return (
        <>
            {!loading &&
                <div className="">
                    <form className="bg-white p-6 rounded-xl space-y-6 max-w-3xl" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-6 lg:flex-nowrap">
                            <SelectOption
                                labelName='Product Type'
                                name="productType"
                                options={type || defaultType}
                                onChange={(e) => { setselectedType(e.target.value) }}
                                defaultOptionName='Choose category'
                                value={selectedType}
                            />
                            <div className="w-full">
                                <label htmlFor="type" className="default">New Brand Name</label>
                                <input
                                    type="text"
                                    id="type"
                                    name="brand"
                                    className="default"
                                    placeholder="Samsung"
                                    required
                                />
                            </div>
                        </div>
                        <SubmitButton>add</SubmitButton>
                    </form>
                </div>
            }
        </>
    )
}