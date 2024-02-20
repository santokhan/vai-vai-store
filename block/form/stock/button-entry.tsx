'use client';

import { StockButtonPOST } from '@/app/api/(store)/stock/entry/post-data-type';
import Button from '@/components/button/button';
import FormContainer from '@/components/form-container';
import InputBox from '@/components/form/input-box';
import SelectOption from '@/components/form/select-option/select-option';
import FormTitle from '@/components/form/title';
import { Brand, Model } from '@/prisma/generated/client';
import { commonPhoneColors } from '@/utils/default-data';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { ServerProps } from './type';
import { toast } from 'react-toastify';

export const initialState = {
    name: '',
    productTypeId: '',
    brandId: '',
    modelId: '',
    purchasePrice: 0,
    sellingPrice: 0,
    quantity: 0,
    color: '',
}

const StockButtonEntryForm: FC<ServerProps> = ({ productType, brand, model }) => {
    const [formData, setFormData] = useState<StockButtonPOST>({ ...initialState, productTypeId: productType[0].id })
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
        const { productTypeId, brandId, modelId, sellingPrice, purchasePrice, color } = formData;

        if (productTypeId && brandId && modelId && sellingPrice && purchasePrice && color) {
            setadding(true);
            try {
                const res = await fetch(`/api/stock/entry/button`, {
                    method: 'POST',
                    body: JSON.stringify(formData as StockButtonPOST)
                });
                const data = await res.json();
                if (data) {
                    toast(data.message)
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
        <section className='space-y-2'>
            <FormTitle>Add Button</FormTitle>
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
                        <SelectOption
                            labelName='Choose Color'
                            name="color"
                            options={commonPhoneColors}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setFormData(prev => ({ ...prev, color: e.target.value }))
                            }}
                            defaultOptionName='default'
                            value={formData.color}
                        />
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

export default StockButtonEntryForm;
