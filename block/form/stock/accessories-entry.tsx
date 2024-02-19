'use client';

import { StockAccessoriesPOST } from '@/app/api/(store)/stock/entry/post-data-type';
import Button from '@/components/button/button';
import FormContainer from '@/components/form-container';
import InputBox from '@/components/form/input-box';
import FormTitle from '@/components/form/title';
import { FormContext } from '@/context/form/form-context';
import { Brand, Model, ProductType } from '@/prisma/generated/client';
import { ORIGIN } from '@/utils/origin';
import { Add } from 'iconsax-react';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from 'react-query';

export const initialState: StockAccessoriesPOST = {
    name: '',
    productTypeId: '',
    brandId: '',
    modelId: '',
    purchasePrice: 0,
    sellingPrice: 0,
    quantity: 0,
}

const StockAccessoriesEntryForm: React.FC = () => {
    const [accessoriesState, setAccessoriesState] = useState<StockAccessoriesPOST>(initialState)
    const [adding, setadding] = useState<boolean>(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { productTypeId, brandId, modelId, sellingPrice, purchasePrice, name, quantity } = accessoriesState;
        if (productTypeId && brandId && modelId && sellingPrice && purchasePrice && name && quantity) {
            setadding(true);
            try {
                const res = await fetch(`${ORIGIN}/api/stock/entry/accessories`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(accessoriesState)
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

    const value = {
        state: accessoriesState,
        setstate: setAccessoriesState
    }

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

    function brandByType(brands: Brand[], type: string): Brand[] {
        if (brands && type) {
            return brands.filter(e => e.productTypeId === type);
        }
        return brands;
    }

    function modelByBrand(models: Model[], brand: string): Model[] {
        if (models && brand) {
            return models.filter(model => model.brandId === brand);
        }
        return models;
    }

    return (
        <FormContext.Provider value={value}>
            <div className="w-full space-y-12 hidden">
                <section className='space-y-2'>
                    <FormTitle>Add Accessories</FormTitle>
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
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setAccessoriesState({ ...accessoriesState, name: e.target.value }) }}
                                        value={accessoriesState.name}
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
                                            value={accessoriesState.productTypeId}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => { setAccessoriesState({ ...accessoriesState, productTypeId: e.target.value }) }}>
                                            <option value="" disabled className='capitalize'>default</option>
                                            {typeQuery.data?.filter(e => e.type === 'accessories').map((type: ProductType, idx) =>
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
                                            value={accessoriesState.brandId}
                                            required={true}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => { setAccessoriesState({ ...accessoriesState, brandId: e.target.value }) }}
                                            disabled={brandQuery.data ? false : true}
                                        >
                                            <option value="" disabled className='capitalize'>default</option>
                                            {accessoriesState.productTypeId && brandByType(brandQuery.data, accessoriesState.productTypeId).map((brand: Brand, idx) =>
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
                                            value={accessoriesState.modelId}
                                            required={true}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => { setAccessoriesState({ ...accessoriesState, modelId: e.target.value }) }}>
                                            <option value="" disabled className='capitalize'>default</option>
                                            {accessoriesState.productTypeId && accessoriesState.brandId && modelByBrand(modelQuery.data, accessoriesState.brandId).map((model: Model, idx) =>
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
                                            setAccessoriesState(prev => ({ ...prev, quantity: Number(e.target.value) }))
                                        }}
                                        className="default"
                                        placeholder="0"
                                        required={true}
                                        value={accessoriesState.quantity || ''}
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
                                            setAccessoriesState(prev => ({ ...prev, purchasePrice: Number(e.target.value) }))
                                        }}
                                        className="default"
                                        placeholder="0"
                                        required={true}
                                        value={accessoriesState.purchasePrice || ''}
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
                                            setAccessoriesState(prev => ({ ...prev, sellingPrice: Number(e.target.value) }))
                                        }}
                                        className="default"
                                        placeholder="0"
                                        required={true}
                                        value={accessoriesState.sellingPrice || ''}
                                    />
                                </InputBox>
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
            </div>
        </FormContext.Provider >
    );
};

export default StockAccessoriesEntryForm;
