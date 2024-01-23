'use client'

import React, { ChangeEvent, FormEvent, Ref, useState } from 'react';
import { useQuery } from 'react-query';
import { ORIGIN } from '@/utils/origin';
import { Customer, InStock } from '@/prisma/generated/client';
import { SearchNormal } from 'iconsax-react';

type Props = {
    setSearchStockData: (data: InStock) => void;
    forwardRef: Ref<HTMLInputElement>;
}

const SearchModelForm: React.FC<Props> = ({ setSearchStockData, forwardRef }) => {
    const [IMEI, setIMEI] = useState<string>('');
    const [isSearching, setisSearching] = useState<boolean>(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setIMEI(e.target.value);
    }

    function searchModelByIMEI(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!IMEI) return console.log({ message: "IMEI is required" });
        setisSearching(true);

        const API_URL = `${ORIGIN}/api/sales/entry/imei?imei=${IMEI}`

        fetch(API_URL).then(res => res.json()).then((data: InStock[]) => {
            if (!data) return console.log({ message: "Can not get model by IMEI" });
            setSearchStockData(data[0])
            setisSearching(false);
        }).catch(err => { console.error(err) })
    }

    return (
        <div className='space-y-8'>
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                <form className="w-full" onSubmit={searchModelByIMEI}>
                    <label htmlFor="IMEI" className="default">Search Product by IMEI</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="search"
                            id="IMEI"
                            className="default"
                            placeholder="46 456464 554655 4"
                            maxLength={15}
                            onChange={handleChange}
                            required={true}
                            ref={forwardRef}
                        />
                        <button className='border h-11 aspect-square bg-gray-100 rounded-lg grid place-items-center hover:bg-gray-50'>
                            {isSearching ? '...' : <SearchNormal className='w-5 h-5' />}
                        </button>
                    </div>
                </form>
                <div className="w-full"></div>
            </div>
        </div>
    );
};

export default SearchModelForm;
