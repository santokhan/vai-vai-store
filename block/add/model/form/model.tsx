'use client';

import SelectOption from "@/components/form/select-option/select-option";
import { ModelDataTable } from "@/components/table/model-table";
import { Brand, Model, ProductType } from "@/prisma/generated/client";
import { defaultBrands, defaultType } from "@/utils/default-data";
import { ORIGIN } from "@/utils/origin";
import { ChangeEvent, FormEvent, useState } from "react";
import { useQuery } from "react-query";

export default function ModelFormWithTable() {
    const [adding, setadding] = useState<boolean>(false);
    const [productTypeId, setproductTypeId] = useState<string>("");
    const [brandId, setbrandId] = useState<string>("");

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
     * Get brandId by using brandId and productTypeId
     * 
     * Can have multiple Samaung brand. Ensure that your are filtering by productTypeId
     * 
     * @param type productTypeId
     * @param brand brandId
     * @returns 
     */
    function getBrandByType(type: string, brand: string): Brand | undefined {
        const typeId = typeQuery.data?.find(e => e.type === type)?.id;
        const brandId = brandQuery.data?.filter(e => e.productTypeId === typeId).find(e => e.brandName === brand);
        return brandId;
    }

    /**
     * Post new brand
     * 
     * @param brandId 
     * @param model 
     * @returns 
     */
    async function postModel(brandId: string, model: string) {
        if (!model && !brandId) {
            console.log("Can not read undeifined type")
            return;
        }

        const response = await fetch(`${ORIGIN}/api/add/model/`, {
            method: 'POST',
            body: JSON.stringify({
                brandId,
                model
            })
        });
        const data = await response.json();
        setadding(false)
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const productTypeId = formData.get('productType');
        const brandId = formData.get('brand');
        const model = formData.get('model');

        if (typeof productTypeId == 'string' && typeof brandId == 'string' && typeof model == 'string') {
            setadding(true)
            await postModel(brandId, model.trim().toLowerCase());
            // refresh data
            await modelQuery.refetch();
        }
    }

    const filteredBrands = brandQuery.data?.filter((brand: Brand) => brand.productTypeId === productTypeId);

    return (
        <>
            {!typeQuery.isLoading && !brandQuery.isLoading &&
                <div className="max-w-6xl mx-auto space-y-6">
                    <form className="bg-white p-6 rounded-xl space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-6 lg:flex-nowrap">
                            {
                                typeQuery.data &&
                                <div className='w-full'>
                                    <label htmlFor="productType" className="default">Product Type</label>
                                    <select
                                        className="default"
                                        name="productType"
                                        id="productType"
                                        required={true}
                                        value={productTypeId}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => { setproductTypeId(e.target.value) }}>
                                        <option value="">Select option</option>
                                        {typeQuery.data.map((type: ProductType, idx) =>
                                            <option className='capitalize' value={type.id} key={idx}>{type.type}</option>
                                        )}
                                    </select>
                                </div>
                            }
                            {
                                brandQuery.data &&
                                <div className='w-full'>
                                    <label htmlFor="brand" className="default">Brand Name</label>
                                    <select
                                        className="default"
                                        name="brand"
                                        id="brand"
                                        required={true}
                                        value={brandId}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => { setbrandId(e.target.value) }}>
                                        <option value="">Select option</option>
                                        {filteredBrands?.map((brand: Brand, idx) =>
                                            <option className='capitalize' value={brand.id} key={idx}>{brand.brandName}</option>
                                        )}
                                    </select>
                                </div>
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