'use client';

import SelectOption from "@/components/form/select-option/select-option";
import { ModelDataTable } from "@/components/table/model-table";
import { Brand, Model, ProductType } from "@/prisma/generated/client";
import { defaultBrands, defaultType } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
import { FormEvent, useState } from "react";
import { useQuery } from "react-query";

export default function ModelFormWithTable() {
    const [adding, setadding] = useState<boolean>(false);
    const [selectedType, setselectedType] = useState<string>("");
    const [selectedBrand, setselectedBrand] = useState<string>("");

    const typeQuery = useQuery('getAllTypes', () =>
        fetch(`${ORIGIN}/api/add/type/`).then(res => res.json()).then((data: ProductType[]) => data)
    )

    const brandQuery = useQuery('getAllBrands', () =>
        fetch(`${ORIGIN}/api/add/brand/`).then(res => res.json()).then((data: Brand[]) => data)
    )

    const modelQuery = useQuery('getAllmodels', () =>
        fetch(`${ORIGIN}/api/add/model/`).then(res => res.json()).then((data: Model[]) => data)
    )

    /**
     * 
     * Get brandId by using selectedBrand and selectedType
     * 
     * Can have multiple Samaung brand. Ensure that your are filtering by selectedType
     * 
     * @param type selectedType
     * @param brand selectedBrand
     * @returns 
     */
    function getBrandByType(type: string, brand: string): Brand | undefined {
        const typeId = typeQuery.data?.find(e => e.type === type)?.id;
        const brandId = brandQuery.data?.filter(e => e.productTypeId === typeId).find(e => e.brandName === brand);
        return brandId;
    }

    async function postModel(type: string, brand: string, model: string) {
        if (!type && !model && !brand && !brandQuery.data) {
            console.log("Can not read undeifined type")
            return;
        }
        console.log(getBrandByType(type, brand));
        const response = await fetch(`${ORIGIN}/api/add/model/`, {
            method: 'POST',
            body: JSON.stringify({
                /** 
                 * Filter brand by type
                 * Extract brandId by using brandName 
                 */
                brandId: getBrandByType(type, brand)?.id,
                model: model
            })
        });
        const data = await response.json();
        setadding(false)
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const productType = formData.get('productType');
        const brand = formData.get('brand');
        const model = formData.get('model');

        if (typeof productType == 'string' && typeof brand == 'string' && typeof model == 'string') {
            setadding(true)
            await postModel(productType, brand, model.trim().toLowerCase());
            // refresh data
            await modelQuery.refetch();
        }
    }

    return (
        <>
            {!typeQuery.isLoading && !brandQuery.isLoading &&
                <div className="max-w-6xl mx-auto space-y-6">
                    <form className="bg-white p-6 rounded-xl space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-6 lg:flex-nowrap">
                            <SelectOption
                                labelName='Product Type'
                                name="productType"
                                options={typeQuery.data?.map(e => e.type) || defaultType}
                                onChange={(e) => { setselectedType(e.target.value) }}
                                defaultOptionName='Choose category'
                                value={selectedType}
                            />
                            {
                                selectedType &&
                                <SelectOption
                                    labelName='Brand'
                                    name="brand"
                                    options={brandQuery.data?.map(e => {
                                        if (e.productTypeId === typeQuery.data?.find(e => e.type === selectedType)?.id) {
                                            return e.brandName
                                        }
                                    }).filter(e => e) || defaultBrands}
                                    onChange={(e) => { setselectedBrand(e.target.value) }}
                                    defaultOptionName='Choose brand'
                                    value={selectedBrand}
                                />
                            }
                            <div className="w-full">
                                <label htmlFor="type" className="default">New Model</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    className="default"
                                    placeholder="Galaxy-S10"
                                    required
                                />
                            </div>
                        </div>
                        <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                    </form>
                    {
                        brandQuery.data && typeQuery.data && modelQuery.data &&
                        <ModelDataTable brands={brandQuery.data} types={typeQuery.data} models={modelQuery.data} />
                    }
                </div>
            }
        </>
    )
}