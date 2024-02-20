'use client';

import { StockAccessoriesPOST } from '@/app/api/(store)/stock/entry/post-data-type';
import Button from '@/components/button/button';
import FormContainer from '@/components/form-container';
import InputBox from '@/components/form/input-box';
import FormTitle from '@/components/form/title';
import { Brand, Model } from '@/prisma/generated/client';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { ServerProps } from './type';
import { toast } from 'react-toastify';

export const initialState: StockAccessoriesPOST = {
    name: '',
    productTypeId: '',
    brandId: '',
    modelId: '',
    purchasePrice: 0,
    sellingPrice: 0,
    quantity: 0,
}

const StockAccessoriesEntryForm: FC<ServerProps> = ({ productType, brand, model }) => {
    const [formData, setFormData] = useState<StockAccessoriesPOST>({ ...initialState, productTypeId: productType[0].id })
    const [adding, setadding] = useState<boolean>(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { productTypeId, brandId, modelId, sellingPrice, purchasePrice, quantity } = formData;

        if (productTypeId && brandId && modelId && sellingPrice && purchasePrice && quantity) {
            setadding(true);
            try {
                const res = await fetch(`/api/stock/entry/accessories`, {
                    method: 'POST',
                    body: JSON.stringify(formData)
                });
                const data = await res.json();
                if (data) {
                    toast(data.message);
                    setadding(false);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert(`Can not add data to stock. Please check the form input.`)
        }
    }

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
        <section className='space-y-2'>
            <FormTitle>Add Accessories</FormTitle>
            <form onSubmit={handleSubmit} className='block space-y-4'>
                <FormContainer>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                                {formData.productTypeId && brandByType(brand, formData.productTypeId).map((brand: Brand, idx) =>
                                    <option className='capitalize' value={brand.id} key={idx}>{brand.brandName}</option>
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
                            <label htmlFor="quantity" className="default">quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min={1}
                                onChange={(e) => {
                                    setFormData(prev => ({ ...prev, quantity: Number(e.target.value) }))
                                }}
                                className="default"
                                placeholder="0"
                                required={true}
                                value={formData.quantity || ''}
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
                                    setFormData(prev => ({ ...prev, purchasePrice: Number(e.target.value) }))
                                }}
                                className="default"
                                placeholder="0"
                                required={true}
                                value={formData.purchasePrice || ''}
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
                                    setFormData(prev => ({ ...prev, sellingPrice: Number(e.target.value) }))
                                }}
                                className="default"
                                placeholder="0"
                                required={true}
                                value={formData.sellingPrice || ''}
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

export default StockAccessoriesEntryForm;
