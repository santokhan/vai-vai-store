'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/form/input-box';
import { Brand, Model, ProductType, SalesEntry } from '@/prisma/generated/client';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

export const initialState = {
    productTypeId: '',
    brandId: '',
    modelId: '',
    startDate: new Date().toString(),
    endDate: new Date().toString(),
}

interface Props {
    productTypes: ProductType[],
    brands: Brand[],
    models: Model[],
    filterData: (callBack: (entry: SalesEntry, i: number) => void) => void
}

const FilterSales: FC<Props> = ({ productTypes, brands, models, filterData }) => {
    const [formData, setFormData] = useState<typeof initialState>(initialState);

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

        if (productTypeId || brandId || modelId || startDate || endDate) {
            filterData((entry) => {
                const entryCreatedAt = entry.createdAt.getTime();
                const isFiltered = (
                    // (!productTypeId || entry.productTypeId === productTypeId) &&
                    // (!brandId || entry.brandId === brandId) &&
                    // (!modelId || entry.modelId === modelId) &&
                    (!startDate || entryCreatedAt >= new Date(startDate).getTime()) &&
                    (!endDate || entryCreatedAt <= new Date(endDate).getTime())
                );

                return isFiltered;
            });
        } else {
            toast(`Can not filter`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='block space-y-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* <InputBox htmlFor='productType' labelName='Product Type'>
                    <select
                        className="default"
                        name="productType"
                        id="productType"
                        value={formData.productTypeId}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => { setFormData({ ...formData, productTypeId: e.target.value }) }}>
                        <option value='' disabled>Default</option>
                        {productTypes.map(({ id, type }: ProductType) =>
                            <option className='capitalize' value={id} key={id}>{type}</option>
                        )}
                    </select>
                </InputBox>
                <InputBox htmlFor='brand' labelName='Brand'>
                    <select
                        className="default"
                        name="brand"
                        id="brand"
                        value={formData.brandId}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => { setFormData({ ...formData, brandId: e.target.value }) }}>
                        <option value='' disabled>Default</option>
                        {formData.productTypeId && brandByType(brands, formData.productTypeId).map(({ id, brandName }: Brand, idx) =>
                            <option className='capitalize' value={id} key={id}>{brandName}</option>
                        )}
                    </select>
                </InputBox>
                <InputBox htmlFor='model' labelName='Model'>
                    <select
                        className="default"
                        name="model"
                        id="model"
                        value={formData.modelId}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => { setFormData({ ...formData, modelId: e.target.value }) }}>
                        <option value='' disabled>Default</option>
                        {formData.brandId && modelByBrand(models, formData.brandId).map(({ id, model }: Model) =>
                            <option className='capitalize' value={id} key={id}>{model}</option>
                        )}
                    </select>
                </InputBox> */}
                <InputBox htmlFor='startDate' labelName='Start Date'>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        max={new Date().toISOString().split("T")[0]}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, startDate: e.target.value }))
                        }}
                        className="default"
                        value={formData.startDate.toString()}
                    />
                </InputBox>
                <InputBox htmlFor='endDate' labelName='End Date'>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        max={new Date().toISOString().split("T")[0]}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, endDate: e.target.value }))
                        }}
                        className="default"
                        value={formData.endDate.toString()}
                    />
                </InputBox>
            </div>

            <div>
                <Button variant="primary">Filter</Button>
            </div>
        </form>
    );
};

export default FilterSales;