'use client';

import { StockButtonPOST } from '@/app/api/(store)/stock/entry/post-data-type';
import Button from '@/components/button/button';
import FormContainer from '@/components/form-container';
import InputBox from '@/components/form/input-box';
import SelectOption from '@/components/form/select-option/select-option';
import FormTitle from '@/components/form/title';
import { FormContext } from '@/context/form/form-context';
import { Brand, Model, ProductType } from '@/prisma/generated/client';
import { commonPhoneColors } from '@/utils/default-data';
import { ORIGIN } from '@/utils/origin';
import { Table } from 'flowbite-react';
import { Add } from 'iconsax-react';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export const InitialState = {
    name: '',
    productTypeId: '',
    brandId: '',
    modelId: '',
    purchasePrice: 0,
    sellingPrice: 0,
    quantity: 0,
    color: '',
}

const StockButtonEntryForm: React.FC = () => {
    const [state, setstate] = useState<StockButtonPOST>(InitialState)
    const [adding, setadding] = useState<boolean>(false);

    const typeQuery = useQuery('getAllTypes', () =>
        fetch(`${ORIGIN}/api/add/type/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: ProductType[]) => data)
    )

    const brandQuery = useQuery('getAllBrands', () =>
        fetch(`${ORIGIN}/api/add/brand/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: Brand[]) => data)
    )

    const modelQuery = useQuery('getAllmodels', () =>
        fetch(`${ORIGIN}/api/add/model/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: Model[]) => data)
    )

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

    const value = {
        state,
        setstate
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { productTypeId, brandId, modelId, sellingPrice, purchasePrice, color } = state;

        if (productTypeId && brandId && modelId && sellingPrice && purchasePrice && color) {
            setadding(true);
            try {
                const res = await fetch(`${ORIGIN}/api/stock/entry/button`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(state as StockButtonPOST)
                });
                const data = await res.json();
                if (data) {
                    alert(data.message);
                    setadding(false);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert(`Can not add data to stock. Please check the form input.`)
        }
    }

    return (
        <FormContext.Provider value={value}>
            <section className='space-y-2 hidden'>
                <FormTitle>Add Button</FormTitle>
                <form onSubmit={handleSubmit} className='block space-y-4'>
                    <FormContainer>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <InputBox>
                                <label htmlFor="name" className="default">Product title</label>
                                <input
                                    type="name"
                                    id="name"
                                    name="name"
                                    className="default"
                                    placeholder="Enter product title"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setstate({ ...state, name: e.target.value }) }}
                                    value={state.name}
                                />
                            </InputBox>
                            {typeQuery.data &&
                                <InputBox>
                                    <label htmlFor="productType" className="default">Product Type</label>
                                    <select
                                        className="default"
                                        name="productType"
                                        id="productType"
                                        required={true}
                                        value={state.productTypeId}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, productTypeId: e.target.value }) }}>
                                        <option value="" disabled className='capitalize'>default</option>
                                        {typeQuery.data?.filter(e => e.type === 'button').map((type: ProductType, idx) =>
                                            <option className='capitalize' value={type.id} key={idx}>{type.type}</option>
                                        )}
                                    </select>
                                </InputBox>
                            }
                            {brandQuery.data &&
                                <InputBox>
                                    <label htmlFor="brand" className="default">Choose brand</label>
                                    <select
                                        className="default"
                                        name="brand"
                                        id="brand"
                                        value={state.brandId}
                                        required={true}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, brandId: e.target.value }) }}>
                                        <option value="" disabled className='capitalize'>default</option>
                                        {state.productTypeId && brandByType(brandQuery.data, state.productTypeId).map((brand: Brand, idx) =>
                                            <option className='capitalize' value={brand.id} key={idx}>{brand.brandName}</option>
                                        )}
                                    </select>
                                </InputBox>
                            }
                            {modelQuery.data &&
                                <InputBox>
                                    <label htmlFor="model" className="default">Choose Model</label>
                                    <select
                                        className="default"
                                        name="model"
                                        id="model"
                                        value={state.modelId}
                                        required={true}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, modelId: e.target.value }) }}>
                                        <option value="" disabled className='capitalize'>default</option>
                                        {state.productTypeId && state.brandId && modelByBrand(modelQuery.data, state.brandId).map((model: Model, idx) =>
                                            <option className='capitalize' value={model.id} key={idx}>{model.model}</option>
                                        )}
                                    </select>
                                </InputBox>
                            }
                            <InputBox>
                                <label htmlFor="quantity" className="default">quantity</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min={1}
                                    onChange={(e) => {
                                        setstate(prev => ({ ...prev, quantity: Number(e.target.value) }))
                                    }}
                                    className="default"
                                    placeholder="0"
                                    required={true}
                                    value={state.quantity || ''}
                                />
                            </InputBox>
                            <InputBox>
                                <label htmlFor="purchasePrice" className="default">Purchase Price</label>
                                <input
                                    type="number"
                                    id="purchasePrice"
                                    name="purchasePrice"
                                    min={1}
                                    onChange={(e) => {
                                        setstate(prev => ({ ...prev, purchasePrice: Number(e.target.value) }))
                                    }}
                                    className="default"
                                    placeholder="0"
                                    required={true}
                                    value={state.purchasePrice || ''}
                                />
                            </InputBox>
                            <InputBox>
                                <label htmlFor="sellingPrice" className="default">Selling Price</label>
                                <input
                                    type="number"
                                    id="sellingPrice"
                                    name="sellingPrice"
                                    min={1}
                                    onChange={(e) => {
                                        setstate(prev => ({ ...prev, sellingPrice: Number(e.target.value) }))
                                    }}
                                    className="default"
                                    placeholder="0"
                                    required={true}
                                    value={state.sellingPrice || ''}
                                />
                            </InputBox>
                            <SelectOption
                                labelName='Choose Color'
                                name="color"
                                options={commonPhoneColors}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                    setstate(prev => ({ ...prev, color: e.target.value }))
                                }}
                                defaultOptionName='default'
                                value={state.color}
                            />
                        </div>
                    </FormContainer>

                    <div className="flex justify-end+">
                        <Button variant="primary" disabled={adding}>
                            {/* <Add className="w-5 h-5" /> */}
                            {adding ? "adding..." : "add"}
                        </Button>
                    </div>
                </form>
            </section>
        </FormContext.Provider >
    );
};

export default StockButtonEntryForm;
