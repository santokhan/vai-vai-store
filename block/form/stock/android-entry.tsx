'use client';

import { StockAndroidPOST } from '@/app/api/(store)/stock/entry/post-data-type';
import Button from '@/components/button/button';
import FormContainer from '@/components/form-container';
import InputBox from '@/components/form/input-box';
import SelectOption from '@/components/form/select-option/select-option';
import { TableTitle } from '@/components/table/table-header';
import { FormContext } from '@/context/form/form-context';
import { Brand, Model, ProductType } from '@/prisma/generated/client';
import { commonPhoneColors } from '@/utils/default-data';
import { ORIGIN } from '@/utils/origin';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from 'react-query';

export const initialState: StockAndroidPOST = {
    name: '',
    productTypeId: '',
    brandId: '',
    modelId: '',
    IMEI: '',
    purchasePrice: 0,
    sellingPrice: 0,
    color: '',
    ram: '',
    rom: '',
}

const StockAndroidEntryForm: React.FC = () => {
    const [state, setstate] = useState<StockAndroidPOST>(initialState)
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

    // const isAndroid = typeQuery.data?.find(e => e.id === state.productTypeId)?.type === 'android';

    // const productTypeById = (typeId: string) => typeQuery.data?.find(e => e.id === typeId)?.type;
    // const brandById = (brandId: string) => brandQuery.data?.find(e => e.id === brandId)?.brandName;
    // const modelById = (modelId: string) => modelQuery.data?.find(e => e.id === modelId)?.model;

    const value = {
        state,
        setstate
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { productTypeId, brandId, modelId, IMEI, sellingPrice, purchasePrice, color, ram, rom } = state;

        if (productTypeId && brandId && modelId && IMEI && sellingPrice && purchasePrice && color && ram && rom) {
            setadding(true);
            try {
                const res = await fetch(`${ORIGIN}/api/stock/entry/android`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(state)
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
            <div className="w-full space-y-12">
                <section className='space-y-2'>
                    <TableTitle>Add Android</TableTitle>
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
                                            {typeQuery.data?.filter(e => e.type === 'android').map((type: ProductType, idx) =>
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
                                <SelectOption
                                    labelName='RAM'
                                    name="ram"
                                    options={[2, 3, 4, 6, 8, 12]}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                        setstate(prev => ({ ...prev, ram: e.target.value }))
                                    }}
                                    defaultOptionName='Default'
                                    value={state.ram || ''}
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
                                    value={state.rom || ''}
                                    required={true}
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

                {/* {createdItem && createdItem.length > 0 &&
                    <section className="w-full max-w-[90vw] overflow-x-auto space-y-2">
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
                                        {
                                            item.name &&
                                            <Table.Cell className="whitespace-nowrap font-normal text-gray-900 capitalize">
                                                {item.name}
                                            </Table.Cell>
                                        }
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
                } */}
            </div>
        </FormContext.Provider >
    );
};

export default StockAndroidEntryForm;
