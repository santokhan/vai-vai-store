import { FormTab } from '@/block/form/sales/entry';
import SelectOption from '@/components/form/select-option/select-option';
import React from 'react';

const SalesReturnForm: React.FC = () => {
    return (
        <>
            <div className="max-w-3xl flex flex-wrap lg:flex-nowrap rounded-xl bg-white w-full p-6">
                <div className='w-full'>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        <SelectOption
                            labelName='Product Type'
                            options={[
                                'samsung',
                                'oppo',
                                'vivo',
                            ]}
                            onChange={() => { }}
                            defaultOptionName='Choose category'
                        />
                    </div>
                </div>
            </div>

            <FormTab InitialObject={{
                "Search by Brand": <>
                    <div className="max-w-3xl flex flex-wrap lg:flex-nowrap rounded-xl bg-white w-full p-6">
                        <div className='w-full'>
                            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                                <SelectOption
                                    labelName='Choose brand'
                                    options={[
                                        'samsung',
                                        'oppo',
                                        'vivo',
                                    ]}
                                    onChange={() => { }}
                                    defaultOptionName='Search by Brand Name'
                                />
                                <SelectOption
                                    labelName='Model'
                                    options={[
                                        'samsung',
                                        'oppo',
                                        'vivo',
                                    ]}
                                    onChange={() => { }}
                                    defaultOptionName='Model'
                                />
                            </div>
                        </div>
                    </div>
                </>,
                "Search by IMEI": <>
                    <div className="max-w-3xl flex flex-wrap lg:flex-nowrap rounded-xl bg-white w-full p-6">
                        <div className='w-full'>
                            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                                <div className="w-full">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-textgray"
                                    >
                                        Search by IMEI
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="46 456464 554655 4"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }} />

            <div className="max-w-3xl flex flex-wrap lg:flex-nowrap rounded-xl bg-white w-full p-6">
                <div className="">Product Section</div>
            </div>
            <div className="flex justify-end w-full mt-8">
                <button
                    type="submit"
                    className="text-white bg-indigo-500 hover:brightness-90 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default SalesReturnForm;
