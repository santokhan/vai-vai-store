'use client';

import SelectOption from "@/components/form/select-option/select-option";
import { BrandTable } from "@/components/table/brand-table";
import { Brand, ProductType } from "@/prisma/generated/client";
import { defaultType } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
import { trim_input } from "@/utils/trim-input";
import { FormEvent, useState } from "react";
import { useQuery } from "react-query";

export default function BrandFormWithTable() {
    const [selectedType, setselectedType] = useState<string>("");
    const [adding, setadding] = useState<boolean>(false);
    const brandQuery = useQuery('getAllBrands', () =>
        fetch(`${ORIGIN}/api/add/brand/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: Brand[]) => data)
    )
    const typeQuery = useQuery('getAllTypes', () =>
        fetch(`${ORIGIN}/api/add/type/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: ProductType[]) => data))

    async function postBrand(brand: { brandName: string, productTypeId: string }) {
        if (!brand.productTypeId && !brand.brandName) {
            console.log("Can not read undeifined type")
            return;
        }

        // API http://localhost:3000/api/add/brand/
        const response = await fetch(`${ORIGIN}/api/add/brand/`, {
            method: 'POST',
            body: JSON.stringify(brand)
        });
        const data = await response.json();
        console.log(data);
        setadding(false)
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const productType = formData.get('productType');
        const brand = formData.get('brand');

        if (productType && typeof brand == 'string') {
            setadding(true);
            if (typeof typeQuery.data == 'object') {
                const foundObject = typeQuery.data.find((item: ProductType) => item.type === productType);
                if (foundObject) {
                    // Exist validation on data I have for table
                    const existBrand = brandQuery.data?.find((item: Brand) => item.brandName === trim_input(brand) && item.productTypeId === foundObject.id);
                    if (existBrand) {
                        console.log("Exist");
                        setadding(false);
                        return;
                    }
                    await postBrand({
                        brandName: trim_input(brand),
                        productTypeId: foundObject.id
                    });

                    await brandQuery.refetch();
                }
            }
        }
    }

    return (
        <>
            {!typeQuery.isLoading &&
                <div className="max-w-3xl+ space-y-6">
                    <form className="bg-white p-6 rounded-xl space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-6 lg:flex-nowrap">
                            <SelectOption
                                labelName='Product Type'
                                name="productType"
                                options={typeQuery.data?.map((item: ProductType) => item.type) || defaultType}
                                onChange={(e) => { setselectedType(e.target.value) }}
                                defaultOptionName='Choose category'
                                value={selectedType}
                                required={true}
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
                        <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                    </form>
                </div>
            }
            {
                !brandQuery.isLoading && !typeQuery.isLoading &&
                <BrandTable brands={brandQuery.data} types={typeQuery.data} />
            }
        </>
    )
}