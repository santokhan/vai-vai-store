'use client';

import NumberInput from '@/components/form/input/number';
import SelectOption from '@/components/form/select-option/select-option';
import SubmitButton from '@/components/form/submit';
import { PRINT } from '@/components/print';
import { FormContext } from '@/context/form/form-context';
import { Brand, Model, ProductType } from '@/prisma/generated/client';
import { commonPhoneColors } from '@/utils/default-data';
import { ORIGIN } from '@/utils/origin';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from 'react-query';

export const InitialState = {
    productType: '',
    brand: '',
    model: '',
    IMEI: '',
    purchasePrice: 0,
    price: 0,
    color: '',
    ram: '',
    rom: '',
}

export type StockEntryType = typeof InitialState;

const StockEntryForm: React.FC = () => {
    const [state, setstate] = useState<StockEntryType>(InitialState)
    const [adding, setadding] = useState<boolean>(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // const formData = new FormData(e.currentTarget);
        // const data = {
        //     productType: formData.get('productType'),
        //     brand: formData.get('brand'),
        //     model: formData.get('model'),
        //     IMEI: formData.get('IMEI'),
        //     price: formData.get('price'),
        //     purchasePrice: formData.get('purchasePrice'),
        //     color: formData.get('color'),
        //     ram: formData.get('ram'),
        //     rom: formData.get('rom'),
        // }

        const { productType, brand, model, IMEI, price, purchasePrice, color, ram, rom } = state;
        console.log(state);

        if (productType && brand && model && IMEI && price && purchasePrice && color && ram && rom) {
            setadding(true);
            // post data
            const res = await fetch(`${ORIGIN}/api/add/stock/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            });
            setadding(false);
        }
    }

    const value = {
        state,
        setstate
    }

    const typeQuery = useQuery('getAllTypes', () =>
        fetch(`${ORIGIN}/api/add/type/`).then(res => res.json()).then((data: ProductType[]) => data)
    )

    const brandQuery = useQuery('getAllBrands', () =>
        fetch(`${ORIGIN}/api/add/brand/`).then(res => res.json()).then((data: Brand[]) => data)
    )

    const modelQuery = useQuery('getAllmodels', () =>
        fetch(`${ORIGIN}/api/add/model/`).then(res => res.json()).then((data: Model[]) => data)
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
            <div className="">
                <h2 className='text-xl font-semibold'>Add product to stock</h2>
            </div>
            <form onSubmit={handleSubmit} className='block space-y-4'>
                <div className="rounded-xl bg-white w-full p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {typeQuery.data &&
                            <div className='w-full'>
                                <label htmlFor="productType" className="default">Product Type</label>
                                <select
                                    className="default"
                                    name="productType"
                                    id="productType"
                                    required={true}
                                    value={state.productType}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, productType: e.target.value }) }}>
                                    <option value="" disabled className='capitalize'>default</option>
                                    {typeQuery.data.map((type: ProductType, idx) =>
                                        <option className='capitalize' value={type.id} key={idx}>{type.type}</option>
                                    )}
                                </select>
                            </div>
                        }
                        {brandQuery.data &&
                            <div className='w-full'>
                                <label htmlFor="brand" className="default">Choose brand</label>
                                <select
                                    className="default"
                                    name="brand"
                                    id="brand"
                                    value={state.brand}
                                    required={true}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, brand: e.target.value }) }}>
                                    <option value="" disabled className='capitalize'>default</option>
                                    {state.productType && brandByType(brandQuery.data, state.productType).map((brand: Brand, idx) =>
                                        <option className='capitalize' value={brand.id} key={idx}>{brand.brandName}</option>
                                    )}
                                </select>
                            </div>
                        }
                        {modelQuery.data &&
                            <div className='w-full'>
                                <label htmlFor="model" className="default">Choose Model</label>
                                <select
                                    className="default"
                                    name="model"
                                    id="model"
                                    value={state.model}
                                    required={true}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, model: e.target.value }) }}>
                                    <option value="" disabled className='capitalize'>default</option>
                                    {state.productType && state.brand && modelByBrand(modelQuery.data, state.brand).map((model: Model, idx) =>
                                        <option className='capitalize' value={model.id} key={idx}>{model.model}</option>
                                    )}
                                </select>
                            </div>
                        }
                        <div className="w-full">
                            <label htmlFor="IMEI" className="default">IMEI Entry</label>
                            <input
                                type="text"
                                id="IMEI"
                                name="IMEI"
                                className="default"
                                placeholder="46 456464 554655 4"
                                pattern='[0-9]{15}'
                                maxLength={15}
                                required={true}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setstate({ ...state, IMEI: e.target.value }) }}
                                value={state.IMEI}
                            />
                        </div>
                        <NumberInput
                            label='Purchase Price'
                            name="purchasePrice"
                            id='purchasePrice'
                            onChange={(e) => {
                                setstate(prev => ({ ...prev, purchasePrice: Number(e.target.value) }))
                            }}
                            value={state.purchasePrice}
                        />
                        <NumberInput
                            label='Price'
                            name="price"
                            id='price'
                            onChange={(e) => {
                                setstate(prev => ({ ...prev, price: Number(e.target.value) }))
                            }}
                            value={state.price}
                        />
                        <SelectOption
                            labelName='Choose Color'
                            name="color"
                            className={`text-[${state.color}]`}
                            options={commonPhoneColors}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setstate(prev => ({ ...prev, color: e.target.value }))
                            }}
                            defaultOptionName='default'
                            value={state.color}
                        />
                        <SelectOption
                            labelName='RAM'
                            name="ram"
                            options={[2, 3, 4, 6, 8, 12]}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setstate(prev => ({ ...prev, ram: e.target.value }))
                            }}
                            defaultOptionName='Default'
                            value={state.ram}
                        />
                        <SelectOption
                            labelName='ROM'
                            name="rom"
                            options={[16, 32, 64, 128, 256, 512]}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setstate(prev => ({ ...prev, rom: e.target.value }))
                            }}
                            defaultOptionName='Default'
                            value={state.rom}
                        />
                    </div>
                </div>

                <div className="flex justify-end+">
                    <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                </div>
            </form>
        </FormContext.Provider>
    );
};

export default StockEntryForm;
