'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/form/input-box';
import { Brand, Model, SalesEntry } from '@/prisma/generated/client';
import { Filter } from 'iconsax-react';
import React, { FC, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const d = new Date();

export const initialState = {
    productTypeId: '',
    brandId: '',
    modelId: '',
    startDate: d.toString(),
    endDate: d.toString(),
}

export const FilterSubmit = () => (
    <Button variant="primary"><Filter className='w-4 h-4' /> Filter</Button>
)

interface Props {
    filterData: (callBack: (entry: SalesEntry, i: number) => void) => void
}

const FilterSales: FC<Props> = ({ filterData }) => {
    const [formData, setFormData] = useState<typeof initialState>(initialState);
    const selectionRange = {
        startDate: d,
        endDate: d,
        key: 'selection',
    }
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { productTypeId, brandId, modelId, startDate, endDate } = formData;

        if (productTypeId || brandId || modelId || startDate || endDate) {
            filterData((entry) => {
                const entryCreatedAt = entry.createdAt.getTime();
                const isFiltered = (
                    (!startDate || entryCreatedAt >= new Date(startDate).getTime()) &&
                    (!endDate || entryCreatedAt <= new Date(endDate).getTime())
                );

                return isFiltered;
            });
        } else {
            toast(`Can not filter`);
        }
    }
    console.log({ date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() + 1}` });

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
                        max={new Date(d.getFullYear(), d.getMonth(), d.getDate() + 2).toISOString().split("T")[0]}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, endDate: e.target.value }))
                        }}
                        className="default"
                        value={formData.endDate.toString()}
                    />
                </InputBox>
            </div>

            <div>
                <FilterSubmit />
            </div>
        </form>
    );
};

export default FilterSales;
