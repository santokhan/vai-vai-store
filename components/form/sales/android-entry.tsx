'use client';

import Button from "@/components/button/button";
import { FoundedProductTable } from "@/components/card/search-product-card";
import FormContainer from "@/components/form-container";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useSalesRowContext } from "@/context/sales-context";
import FormTitle from "../title";
import CloseForm from "../close-form";
import InputBox from "../input-box";
import { SearchNormal } from "iconsax-react";
import { ORIGIN } from "@/utils/origin";
import { StockAndroidIncludes } from "@/app/api/(store)/stock/search/imei/route";
// import { getUnsoldProductByIMEI } from "@/actions/stock/android";
// import { StockAndroid } from "@/prisma/generated/client";

export default function AndroidSalesEntryForm({ onCloseForm }: { onCloseForm: () => void }) {
    const [foundStockItem, setfoundStockItem] = useState<StockAndroidIncludes | null>(null);
    const [IMEI, setIMEI] = useState<string>('');
    const [isSearching, setisSearching] = useState<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const { addToSales } = useSalesRowContext();
    // const [suggestions, setsuggestions] = useState<StockAndroid[]>([]);
    // const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setIMEI(value.replace(/\D+/g, ''));
        setfoundStockItem(null);

        // // suggestions
        // if (value) {
        //     getUnsoldProductByIMEI(value).then(data => {
        //         if (data) {
        //             setsuggestions(data)
        //             setShowSuggestions(true)
        //         }
        //     })
        // }
    }

    async function searchModelByIMEI(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (IMEI.length == 15) {
            setisSearching(true);
            const API_URL = `${ORIGIN}/api/stock/search/imei?imei=${IMEI}`
            fetch(API_URL, { cache: 'no-store' }).then(res => res.json()).then((data) => {
                if (data.message) {
                    alert(data.message)
                } else {
                    setfoundStockItem(data);
                }
                setisSearching(false);
            }).catch(err => { console.error(err) })
        } else {
            alert('Please enter a 15 digit valid IMEI.');
        }
    }
    async function findByIMEI(IMEI: string) {
        setisSearching(true);
        const API_URL = `${ORIGIN}/api/stock/search/imei?imei=${IMEI}`
        fetch(API_URL, { cache: 'no-store' }).then(res => res.json()).then((data) => {
            if (data.message) {
                alert(data.message)
            } else {
                setfoundStockItem(data);
            }
            setisSearching(false);
        }).catch(err => { console.error(err) })
    }

    async function addToSalesEntry() {
        if (foundStockItem?.id) {
            addToSales({
                stockId: foundStockItem.id,
                quantity: 1,
                price: foundStockItem.sellingPrice,
                type: 'android',
                brand: foundStockItem.brand.brandName,
                model: foundStockItem.model.model,
                ram: foundStockItem.ram,
                rom: foundStockItem.rom
            });
            onCloseForm();
        } else {
            alert('Please search product first');
            searchInputRef.current?.focus()
        }
    }

    return (
        <FormContainer>
            <div className="flex justify-between mb-2">
                <FormTitle>android entry</FormTitle>
                <CloseForm onClick={onCloseForm} />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                <InputBox>
                    <form className="w-full" onSubmit={searchModelByIMEI}>
                        <label htmlFor="IMEI" className="default">Search Product by IMEI</label>
                        <div className="flex items-center gap-2 relative">
                            <input
                                type="search"
                                id="IMEI"
                                className="default"
                                placeholder="464564645546554"
                                maxLength={15}
                                value={IMEI}
                                onChange={handleChange}
                                required={true}
                                ref={searchInputRef}
                            />
                            <button className='border h-11 aspect-square bg-gray-100 rounded-lg grid place-items-center hover:bg-gray-50'>
                                {isSearching ? '...' : <SearchNormal className='w-5 h-5' />}
                            </button>
                        </div>
                    </form>
                    {/* {showSuggestions &&
                        <div className="max-w-lg mt-2">
                            {suggestions?.map((suggestion, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    className="w-full text-left hover:bg-gray-100 px-3 py-2 rounded-lg"
                                    onClick={async () => {
                                        setIMEI(suggestion.IMEI)
                                        await findByIMEI(suggestion.IMEI)
                                        setShowSuggestions(false)
                                    }}
                                >{suggestion.IMEI}</button>
                            ))}
                        </div>
                    } */}
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
                        'buying price': foundStockItem.purchasePrice,
                        'selling price': (
                            <span className="inline-flex items-center gap-1">
                                {foundStockItem.sellingPrice}{" "}
                                <small className="text-gray-500">
                                    ({foundStockItem.sellingPrice - foundStockItem.purchasePrice})
                                </small>
                            </span>
                        ),
                        'color': foundStockItem.color,
                        'Ram/Rom': foundStockItem.ram + '/' + foundStockItem.rom
                    }} />
                    <Button variant="primary" type="button" onClick={addToSalesEntry}>add</Button>
                </>
            }
        </FormContainer>
    )
}

