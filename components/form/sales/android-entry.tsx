'use client';
import Button from "@/components/button/button";
import SearchProductCard from "@/components/card/search-product-card";
import FormContainer from "@/components/form-container";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useSalesRowContext } from "@/context/sales-context";
import FormTitle from "../title";
import CloseForm from "../close-form";
import InputBox from "../input-box";
import { SearchNormal } from "iconsax-react";
import { ORIGIN } from "@/utils/origin";
import { StockAndroidIncludes } from "@/app/api/(store)/stock/search/imei/route";

export default function AndroidSalesEntryForm({ onCloseForm }: { onCloseForm: () => void }) {
    const [foundStockItem, setfoundStockItem] = useState<StockAndroidIncludes | null>(null);
    const [IMEI, setIMEI] = useState<string>('');
    const [isSearching, setisSearching] = useState<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const { addToSales } = useSalesRowContext();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setIMEI(e.target.value);
        setfoundStockItem(null);
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
                    console.log(data);
                    setfoundStockItem(data);
                }
                setisSearching(false);
            }).catch(err => { console.error(err) })
        } else {
            alert('Please enter a 15 digit valid IMEI.');
        }
    }

    async function addToSalesEntry() {
        if (foundStockItem?.id) {
            addToSales({
                stockId: foundStockItem.id,
                quantity: 1,
                price: foundStockItem.sellingPrice,
                type: 'android',
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
                    <SearchProductCard stockAndroid={foundStockItem} />
                    <Button variant="primary" type="button" onClick={addToSalesEntry}>add</Button>
                </>
            }
        </FormContainer>
    )
}

