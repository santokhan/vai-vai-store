'use client';
import FormContainer from "@/components/form-container";
import { Customer, Seller } from "@/prisma/generated/client";
import { ORIGIN } from "@/utils/origin";
import { ChangeEvent } from "react";
import { useQuery } from "react-query";
import InputBox from "./input-box";
import { useSellerContext } from "@/context/seller-context";
import FormTitle from "./title";

export default function SellerForm() {
    const { seller, setSellerData } = useSellerContext();

    const sellerQuery = useQuery('getAllCustomer', () =>
        fetch(`${ORIGIN}/api/add/seller/`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: Customer[]) => data)
    )

    return (
        <FormContainer>
            <FormTitle>Seller Data</FormTitle>
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
                <InputBox>
                    <label htmlFor="seller" className="default">Seller</label>
                    <select
                        className="default"
                        name="seller"
                        id="seller"
                        required={true}
                        value={seller.sellerId}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                            setSellerData('sellerId', e.target.value)
                        }}>
                        <option value="" disabled className='capitalize'>default</option>
                        {sellerQuery.data?.map((type: Seller, idx) =>
                            <option className='capitalize' value={type.id} key={idx}>{type.name}</option>
                        )}
                    </select>
                </InputBox>
                <InputBox>
                    <label htmlFor="discount" className="default">discount</label>
                    <input
                        type='number'
                        className="default"
                        name="discount"
                        id="discount"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setSellerData('sellerId', e.target.value)
                        }}
                        placeholder="0"
                        value={seller.discount || ''}
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor="due" className="default">due</label>
                    <input
                        type='number'
                        className="default"
                        name="due"
                        id="due"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setSellerData('sellerId', e.target.value)
                        }}
                        placeholder="0"
                        value={seller.due || ''}
                    />
                </InputBox>
            </div>
        </FormContainer>
    )
}

