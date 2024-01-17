import NumberInput from '@/components/form/input/number';
import SelectOption from '@/components/form/select-option/select-option';
import SubmitButton from '@/components/form/submit';
import { FormContext } from '@/context/form/form-context';
import React, { ChangeEvent, FormEvent, useState } from 'react';

export type StockEntryType = {
    productType: string,
    brand: string,
    model: string,
    color: string,
    IMEI: string,
    price: number,
    discount: number,
}

export const InitialState: StockEntryType = {
    productType: '',
    brand: '',
    model: '',
    color: '',
    IMEI: '',
    price: 0,
    discount: 0,
}

const StockEntryForm: React.FC = () => {
    const [state, setstate] = useState<StockEntryType>(InitialState)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log({
            productType: formData.get('productType'),
            brand: formData.get('brand'),
            model: formData.get('model'),
            color: formData.get('color'),
            IMEI: formData.get('IMEI'),
            price: formData.get('price'),
            discount: formData.get('discount'),
        });
    }

    const value = {
        state,
        setstate
    }

    return (
        <FormContext.Provider value={value}>
            <form onSubmit={handleSubmit} className='block space-y-4'>
                <div className="max-w-3xl flex flex-wrap lg:flex-nowrap rounded-xl bg-white w-full p-6">
                    <div className='w-full'>
                        <div className="flex flex-wrap lg:flex-nowrap gap-4">
                            <SelectOption
                                labelName='Product Type'
                                name="productType"
                                options={[
                                    'samsung',
                                    'oppo',
                                    'vivo',
                                ]}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                    state.productType = e.target.value
                                }}
                                defaultOptionName='Choose category'
                                value={state.productType}
                                required={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl flex flex-wrap lg:flex-nowrap rounded-xl bg-white w-full p-6">
                    <div className='w-full'>
                        <div className="flex flex-wrap lg:flex-nowrap gap-4">
                            <SelectOption
                                labelName='Choose brand'
                                name="brand"
                                options={[
                                    'samsung',
                                    'oppo',
                                    'vivo',
                                ]}
                                onChange={() => { }}
                                defaultOptionName='Search by Brand Name'
                                value={state.brand}
                                required={true}
                            />
                            <SelectOption
                                labelName='Choose Model'
                                name="model"
                                options={[
                                    'samsung',
                                    'oppo',
                                    'vivo',
                                ]}
                                onChange={() => { }}
                                defaultOptionName='Search by Brand Name'
                                value={state.model}
                                required={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl flex flex-wrap lg:flex-nowrap rounded-xl bg-white w-full p-6">
                    <div className='w-full'>
                        <div className="flex flex-wrap lg:flex-nowrap gap-4">
                            <div className="w-full">
                                <label
                                    htmlFor="IMEI"
                                    className="block mb-2 text-sm font-medium text-textgray"
                                >
                                    IMEI
                                </label>
                                <input
                                    type="text"
                                    id="IMEI"
                                    name="IMEI"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="46 456464 554655 4"
                                    required={true}
                                />
                            </div>
                            <SelectOption
                                labelName='Choose Color'
                                name="color"
                                options={[
                                    'red',
                                    'green',
                                    'blue',
                                ]}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                    console.log(e.target.value)
                                }}
                                defaultOptionName='Search by color name'
                                value={state.color}
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl flex flex-wrap lg:flex-nowrap rounded-xl bg-white w-full p-6">
                    <div className='w-full'>
                        <div className="flex flex-wrap lg:flex-nowrap gap-4">
                            <NumberInput
                                label='Price'
                                name="price"
                                id='price'
                                onChange={() => { }}
                                value={state.color}
                            />
                            <NumberInput
                                label='Discount'
                                name="discount"
                                id='discount'
                                onChange={() => { }}
                                value={state.color}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <SubmitButton />
                </div>
            </form>
        </FormContext.Provider>
    );
};

export default StockEntryForm;
