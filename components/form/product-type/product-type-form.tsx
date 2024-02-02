'use client';

import { ProductType } from '@/prisma/generated/client';
import { ORIGIN } from '@/utils/origin';
import React, { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

export type productType = { id: string; name: string };

const StockEntryForm: React.FC = () => {
    const [state, setstate] = useState<productType | null>();

    const typeQuery = useQuery('getAllTypes', () =>
        fetch(`${ORIGIN}/api/add/type/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: ProductType[]) => data)
    )
    const productTypeById = (typeId: string) => typeQuery.data?.find(e => e.id === typeId)?.type;

    return (
        <div className='w-full space-y-2'>
            <h2 className='text-xl font-semibold'>Add product to stock</h2>
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
                                value={state?.id}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                    const id = e.target.value;
                                    setstate({
                                        id: id,
                                        name: productTypeById(id) || ''
                                    })
                                }}>
                                <option value="" disabled className='capitalize'>default</option>
                                {typeQuery.data?.map((type: ProductType, idx) =>
                                    <option className='capitalize' value={type.id} key={idx}>{type.type}</option>
                                )}
                            </select>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default StockEntryForm;
