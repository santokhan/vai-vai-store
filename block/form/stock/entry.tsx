'use client';

import NumberInput from '@/components/form/input/number';
import SelectOption from '@/components/form/select-option/select-option';
import { PRINT } from '@/components/print';
import { FormContext } from '@/context/form/form-context';
import { Brand, InStock, Model, ProductType } from '@/prisma/generated/client';
import { commonPhoneColors } from '@/utils/default-data';
import { ORIGIN } from '@/utils/origin';
import { Table } from 'flowbite-react';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export const InitialState = {
    name: '',
    productTypeId: '',
    brandId: '',
    modelId: '',
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
    const [createdItem, setcreatedItem] = useState<any[] | null>(null);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { productTypeId, brandId, modelId, IMEI, price, purchasePrice, color, ram, rom } = state;

        if (productTypeId && brandId && modelId && IMEI && price && purchasePrice) {
            setadding(true);
            // post data
            const res = await fetch(`${ORIGIN}/api/stock/entry`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            });
            const data = await res.json();
            setcreatedItem(data);
            setadding(false);
        } else {
            console.error(`Can not add product to stock. Please check the form input.`);
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

    const isAndroid = typeQuery.data?.find(e => e.id === state.productTypeId)?.type === 'android';

    const productTypeById = (typeId: string) => typeQuery.data?.find(e => e.id === typeId)?.type;
    const brandById = (brandId: string) => brandQuery.data?.find(e => e.id === brandId)?.brandName;
    const modelById = (modelId: string) => modelQuery.data?.find(e => e.id === modelId)?.model;

    return (
        <FormContext.Provider value={value}>
            <div className="w-full space-y-12">
                <section className='space-y-2'>
                    <h2 className='text-xl font-semibold'>Add product to stock</h2>
                    <form onSubmit={handleSubmit} className='block space-y-4'>
                        <div className="rounded-xl bg-white w-full p-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <div className='w-full'>
                                    <label htmlFor="name" className="default">Product title</label>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        className="default"
                                        placeholder="Enter product title"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setstate({ ...state, name: e.target.value }) }}
                                        value={state.name}
                                        required={true}
                                    />
                                </div>
                                {typeQuery.data &&
                                    <div className='w-full'>
                                        <label htmlFor="productType" className="default">Product Type</label>
                                        <select
                                            className="default"
                                            name="productType"
                                            id="productType"
                                            required={true}
                                            value={state.productTypeId}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, productTypeId: e.target.value }) }}>
                                            <option value="" disabled className='capitalize'>default</option>
                                            {typeQuery.data?.map((type: ProductType, idx) =>
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
                                            value={state.brandId}
                                            required={true}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, brandId: e.target.value }) }}>
                                            <option value="" disabled className='capitalize'>default</option>
                                            {state.productTypeId && brandByType(brandQuery.data, state.productTypeId).map((brand: Brand, idx) =>
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
                                            value={state.modelId}
                                            required={true}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => { setstate({ ...state, modelId: e.target.value }) }}>
                                            <option value="" disabled className='capitalize'>default</option>
                                            {state.productTypeId && state.brandId && modelByBrand(modelQuery.data, state.brandId).map((model: Model, idx) =>
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
                                <div className="w-full">
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
                                        value={state.purchasePrice}
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="price" className="default">Price</label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        min={1}
                                        onChange={(e) => {
                                            setstate(prev => ({ ...prev, price: Number(e.target.value) }))
                                        }}
                                        className="default"
                                        placeholder="0"
                                        required={true}
                                        value={state.price}
                                    />
                                </div>
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
                                {
                                    isAndroid &&
                                    <>
                                        <SelectOption
                                            labelName='RAM'
                                            name="ram"
                                            options={[2, 3, 4, 6, 8, 12]}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                                setstate(prev => ({ ...prev, ram: e.target.value }))
                                            }}
                                            defaultOptionName='Default'
                                            value={state.ram}
                                            required={true}
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
                                            required={true}
                                        />
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex justify-end+">
                            <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                        </div>
                    </form>
                </section>
                {createdItem && createdItem.length > 0 &&
                    <section className="w-full max-w-[90vw] overflow-x-auto space-y-2">
                        {/* <PRINT data={state} /> */}
                        <h2 className='text-xl font-semibold'>Add product to stock</h2>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>Name</Table.HeadCell>
                                <Table.HeadCell>IMEI</Table.HeadCell>
                                <Table.HeadCell>Color</Table.HeadCell>
                                <Table.HeadCell>RAM</Table.HeadCell>
                                <Table.HeadCell>ROM</Table.HeadCell>
                                <Table.HeadCell title="Purchase Price">Purchase</Table.HeadCell>
                                <Table.HeadCell>Price</Table.HeadCell>
                                <Table.HeadCell>Sold</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {createdItem.map((item: InStock) => (
                                    <Table.Row className="" key={item.id}>
                                        <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                            {item.name}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                            {productTypeById(item.productTypeId)}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                            {brandById(item.brandId)}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                            {modelById(item.modelId)}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                            {item.color}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                            {item.ram}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                            {item.rom}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                            {item.sold ? 'yes' : 'no'}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </section>
                }
            </div>
        </FormContext.Provider >
    );
};

export default StockEntryForm;
