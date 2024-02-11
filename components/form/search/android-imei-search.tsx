'use client'

import React, { ChangeEvent, FormEvent, Ref, useState } from 'react';
import { ORIGIN } from '@/utils/origin';
import { StockAndroid } from '@/prisma/generated/client';
import { SearchNormal } from 'iconsax-react';
import InputBox from '../input-box';

type Props = {
    setSearchStockData: (data: StockAndroid) => void;
    forwardRef: Ref<HTMLInputElement>;
}

const AndroidIMEISearch: React.FC<Props> = ({ setSearchStockData, forwardRef }) => {
    const [IMEI, setIMEI] = useState<string>('');
    const [isSearching, setisSearching] = useState<boolean>(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setIMEI(e.target.value);
    }

    function searchModelByIMEI(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setisSearching(true);

        const API_URL = `${ORIGIN}/api/stock/search/imei?imei=${IMEI}`

        fetch(API_URL, { cache: 'no-store' }).then(res => res.json()).then((data) => {
            if (!data) {
                alert("Can not item by IMEI");
            } else {
                if (data.message) {
                    alert(data.message)
                } else {
                    setSearchStockData(data as StockAndroid)
                }
                setisSearching(false);
            }
        }).catch(err => { console.error(err) })
    }

    return (
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
            <InputBox>
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
            </InputBox>
            <InputBox><></></InputBox>
        </div>
    );
};

export default AndroidIMEISearch;
