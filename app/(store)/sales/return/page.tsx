'use client';

import { addReturnAndroid } from "@/actions/sales/return/return";
import { checkSoldItem } from "@/actions/stock/check-sold-item";
import { StockAndroidIncludes } from "@/app/api/(store)/stock/search/imei/route";
import Button from "@/components/button/button";
import { FoundedProductTable } from "@/components/card/search-product-card";
import FormContainer from "@/components/form-container";
import InputBox from "@/components/form/input-box";
import FormTitle from "@/components/form/title";
import { SearchNormal } from "iconsax-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function SalesReturn() {
    const [foundStockItem, setfoundStockItem] = useState<StockAndroidIncludes | null>(null);
    const [IMEI, setIMEI] = useState<string>('');
    const [isSearching, setisSearching] = useState<boolean>(false);
    const [adding, setadding] = useState<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    async function searchModelByIMEI(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (IMEI.length == 15) {
            setisSearching(true);
            checkSoldItem(IMEI).then(data => {
                if (data) {
                    setfoundStockItem(data);
                }
            }).catch(err => {
                toast(err.message)
                console.error(err)
            }).finally(() => {
                setisSearching(false);
            });
        } else {
            alert('Please enter a 15 digit valid IMEI.');
        }
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setIMEI(e.target.value);
        setfoundStockItem(null);
    }

    function addToReturn() {
        if (foundStockItem?.id) {
            setadding(true);
            addReturnAndroid(foundStockItem.id).then(data => {
                if (data) {
                    setfoundStockItem(null);
                    setIMEI('');
                    setadding(false);
                    toast(`Sales return added successfully`)
                }
            }).catch(err => console.error(err)).finally(() => {
                setadding(false)
            });
        } else {
            alert('Please search product first');
            searchInputRef.current?.focus()
        }
    }

    return (
        <FormContainer>
            <div className="flex justify-between mb-2">
                <FormTitle>Return entry</FormTitle>
            </div>
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
                                ref={searchInputRef}
                            />
                            <button className='border h-11 aspect-square bg-gray-100 rounded-lg grid place-items-center hover:bg-gray-50'>
                                {isSearching ? '...' : <SearchNormal className='w-5 h-5' />}
                            </button>
                        </div>
                    </form>
                </InputBox>
                <div className="w-full"></div>
            </div>
            {foundStockItem &&
                <>
                    <FoundedProductTable obj={{
                        'brand': foundStockItem.brand.brandName,
                        'model': foundStockItem.model.model,
                        'IMEI': foundStockItem.IMEI,
                        'name': foundStockItem.name,
                        'selling price': foundStockItem.sellingPrice,
                        'color': foundStockItem.color,
                        'Ram/Rom': foundStockItem.ram + '/' + foundStockItem.rom
                    }} />
                    <Button variant="primary" type="button" onClick={addToReturn}>{adding ? 'Adding...' : 'Add to return'}</Button>
                </>
            }
        </FormContainer>
    )
}