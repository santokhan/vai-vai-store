'use client';

import Button from '@/components/button/button';
import FormContainer from '@/components/form-container';
import InputBox from '@/components/form/input-box';
import FormTitle from '@/components/form/title';
import { Brand, Model, ProductType } from '@/prisma/generated/client';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { addButtonStock } from '@/actions/stock/entry/button';

export const initialState = {
    productTypeId: '',
    brandId: '',
    modelId: '',
    startDate: new Date(),
    endDate: new Date(),
}

interface ServerProps {
    productType: ProductType[],
    brand: Brand[],
    model: Model[],
}

const FilterSales: FC<ServerProps> = ({ productType, brand, model }) => {
    const [formData, setFormData] = useState<typeof initialState>({ ...initialState, productTypeId: productType[0].id })
    const [adding, setadding] = useState<boolean>(false);

    function brandByType(brands: Brand[], productTypeId: string): Brand[] {
        if (brands && productTypeId) {
            return brands.filter(e => e.productTypeId === productTypeId);
        }
        return brands;
    }

    function modelByBrand(models: Model[], brandId: string): Model[] {
        if (models && brandId) {
            return models.filter(model => model.brandId === brandId);
        }
        return models;
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { productTypeId, brandId, modelId, startDate, endDate } = formData;

        // if (productTypeId && brandId && modelId && startDate && endDate) {
        //     setadding(true);
        //     addButtonStock(formData).then(data => {
        //         if (data) {
        //             toast(data.message)
        //             setadding(false);
        //         }
        //     }).catch(err => console.error)
        // } else {
        //     toast(`POST data is missing`)
        // }
    }

    return (
        <section className='space-y-2'>
            <FormTitle>Add Button</FormTitle>
            <form onSubmit={handleSubmit} className='block space-y-4'>
                <FormContainer>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <InputBox>
                            <label htmlFor="productType" className="default">Product Type</label>
                            <select
                                className="default"
                                name="productType"
                                id="productType"
                                value={formData.productTypeId}
                                required={true}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => { setFormData({ ...formData, productTypeId: e.target.value }) }}>
                                <option value='' disabled>Default</option>
                                {productType.map(({ id, type }: ProductType) =>
                                    <option className='capitalize' value={id} key={id}>{type}</option>
                                )}
                            </select>
                        </InputBox>
                        <InputBox>
                            <label htmlFor="brand" className="default">Choose brand</label>
                            <select
                                className="default"
                                name="brand"
                                id="brand"
                                value={formData.brandId}
                                required={true}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => { setFormData({ ...formData, brandId: e.target.value }) }}>
                                <option value='' disabled>Default</option>
                                {formData.productTypeId && brandByType(brand, formData.productTypeId).map(({ id, brandName }: Brand, idx) =>
                                    <option className='capitalize' value={id} key={id}>{brandName}</option>
                                )}
                            </select>
                        </InputBox>
                        <InputBox>
                            <label htmlFor="model" className="default">Choose Model</label>
                            <select
                                className="default"
                                name="model"
                                id="model"
                                value={formData.modelId}
                                required={true}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => { setFormData({ ...formData, modelId: e.target.value }) }}>
                                <option value='' disabled>Default</option>
                                {formData.brandId && modelByBrand(model, formData.brandId).map((model: Model, idx) =>
                                    <option className='capitalize' value={model.id} key={idx}>{model.model}</option>
                                )}
                            </select>
                        </InputBox>
                        <InputBox>
                            <label htmlFor="startDate" className="default">Start Date</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                min={1}
                                onChange={(e) => {
                                    setFormData(prev => ({ ...prev, startDate: new Date(e.target.value) }))
                                }}
                                className="default"
                                placeholder="0"
                                required={true}
                                value={formData.startDate.toString()}
                            />
                        </InputBox>
                        <InputBox>
                            <label htmlFor="endDate" className="default">Start Date</label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                min={1}
                                onChange={(e) => {
                                    setFormData(prev => ({ ...prev, endDate: new Date(e.target.value) }))
                                }}
                                className="default"
                                placeholder="0"
                                required={true}
                                value={formData.endDate.toString()}
                            />
                        </InputBox>
                    </div>
                </FormContainer>

                <div>
                    <Button variant="primary" disabled={adding}>
                        {adding ? "adding..." : "add"}
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default FilterSales;
