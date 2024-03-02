'use client';

import Button from "@/components/button/button";
import FormContainer from "@/components/form-container";
import { Brand, Model } from "@/prisma/generated/client";
import { ChangeEvent, useState } from "react";
import FormTitle from "../title";
import CloseForm from "../close-form";
import InputBox from "../input-box";
import SelectOption from "../select-option/select-option";
import { commonPhoneColors } from "@/utils/pre-defined-form-data";
import { SalesRowIncludeBrandModel, useSalesRowContext } from "@/context/sales-context";
import { SearchNormal } from "iconsax-react";
import { StockButtonIncludeBrandModel, getStockButtonByModel } from "@/actions/stock/button/get";
import { toast } from "react-toastify";
import { FoundedProductTable } from "@/components/card/search-product-card";
import { ServerProps } from "@/block/form/stock/type";

const initialState = {
    productTypeId: '',
    brandId: '',
    modelId: '',
    color: '',
    quantity: 1
}

interface Props extends ServerProps {
    onCloseForm: () => void
}

export default function ButtonSalesEntryForm({ onCloseForm, productType, brand, model }: Props) {
    const [isSearching, setIsSearching] = useState(false);
    const [formData, setFormData] = useState<typeof initialState>({ ...initialState, productTypeId: productType[0].id });
    const [founded, setFounded] = useState<StockButtonIncludeBrandModel | undefined>(undefined);
    const { addToSales } = useSalesRowContext();

    async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (founded) {
            const entity: SalesRowIncludeBrandModel = {
                type: 'button',
                brand: founded.brand.brandName,
                model: founded.model.model,
                stockId: founded.id,
                quantity: formData.quantity,
                price: founded.sellingPrice,
            }
            addToSales(entity);
            onCloseForm();
        }
    }

    async function onSearchStockButton() {
        if (formData.modelId) {
            setIsSearching(true);
            const stock: StockButtonIncludeBrandModel | undefined | null = await getStockButtonByModel(formData.modelId, formData.color);
            if (stock?.id) {
                setFounded(stock);
            } else {
                toast(`No stock found`);
            }
            setIsSearching(false);
        }
    }

    return (
        <FormContainer>
            <div className="flex justify-between mb-2">
                <FormTitle>Button entry</FormTitle>
                <CloseForm onClick={onCloseForm} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputBox>
                        <label htmlFor="brand" className="default">Brand Name</label>
                        <select
                            className="default"
                            name="brand"
                            id="brand"
                            required={true}
                            value={formData.brandId}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setFormData({ ...formData, brandId: e.target.value })
                            }}>
                            <option value="" disabled>Default</option>
                            {brand.filter(e => e.productTypeId === formData.productTypeId).map((brand: Brand, idx) =>
                                <option className='capitalize' value={brand.id} key={idx}>{brand.brandName}</option>
                            )}
                        </select>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="model" className="default">Choose Model</label>
                        <select
                            className="default"
                            name="model"
                            id="model"
                            value={formData.modelId}
                            required={true}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setFormData({ ...formData, modelId: e.target.value })
                            }}>
                            <option value='' disabled>Default</option>
                            {model.filter(e => e.brandId === formData.brandId).map((model: Model, idx: number) =>
                                <option className='capitalize' value={model.id} key={idx}>{model.model}</option>
                            )}
                        </select>
                    </InputBox>
                    <SelectOption
                        labelName='Choose Color'
                        name="color"
                        options={commonPhoneColors}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                            setFormData(prev => ({ ...prev, color: e.target.value }))
                        }}
                        defaultOptionName='default'
                        value={formData.color}
                    />
                    {/* <InputBox>
                        <label htmlFor="quantity" className="default">quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min={1}
                            onChange={(e) => {
                                setFormData(prev => ({ ...prev, quantity: Number(e.target.value) }))
                            }}
                            className="default"
                            placeholder="0"
                            required={true}
                            value={formData.quantity || ''}
                        />
                    </InputBox> */}
                </div>

                {founded &&
                    <FoundedProductTable obj={{
                        'brand name': founded.brand.brandName,
                        'model': founded.model.model,
                        'price': founded.sellingPrice,
                        'quantity': founded.quantity,
                        'color': founded.color,
                    }} />
                }

                <div className="">
                    {
                        founded ?
                            <Button variant="primary">add</Button>
                            :
                            <button onClick={onSearchStockButton} className='border h-11 aspect-square bg-gray-100 rounded-lg grid place-items-center hover:bg-gray-50'>
                                {isSearching ? '...' : <SearchNormal className='w-5 h-5' />}
                            </button>
                    }
                </div>
            </form>
        </FormContainer>
    )
}


