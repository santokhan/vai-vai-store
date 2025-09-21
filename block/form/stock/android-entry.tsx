'use client'

import { StockAndroidPOST } from '@/app/api/(store)/stock/entry/post-data-type'
import Button from '@/components/button/button'
import FormContainer from '@/components/form-container'
import InputBox from '@/components/form/input-box'
import SelectOption from '@/components/form/select-option/select-option'
import { TableTitle } from '@/components/table/table-header'
import { Brand, Dealer, Model } from '@/prisma/generated/client'
import { commonPhoneColors } from '@/utils/default-data'
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ServerProps } from './type'
import { RAM, ROM } from '@/utils/pre-defined-form-data'
import { addStockAndroid } from '@/actions/stock/entry/android'
import { isValidIMEI } from '@/utils/validation'
import { getDealers } from '@/actions/dealer'
import useDealers from '@/hooks/useDealers'

export const initialState: StockAndroidPOST = {
  name: '',
  productTypeId: '',
  brandId: '',
  modelId: '',
  IMEI: '',
  purchasePrice: 0,
  sellingPrice: 0,
  color: '',
  ram: '',
  rom: '',
  dealerId: ''
}

const StockAndroidEntryForm: FC<ServerProps> = ({
  productType,
  brand,
  model
}) => {
  const [state, setstate] = useState<StockAndroidPOST>({
    ...initialState,
    productTypeId: productType[0].id
  })
  const [adding, setadding] = useState<boolean>(false)
  const { dealers } = useDealers()

  function brandByType (brands: Brand[], type: string): Brand[] {
    if (brands && type) {
      return brands.filter(e => e.productTypeId === type)
    }
    return brands
  }

  function modelByBrand (models: Model[], brand: string): Model[] {
    if (models && brand) {
      return models.filter(model => model.brandId === brand)
    }
    return models
  }

  function onChange (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    let value: string | number = e?.target?.value
    if (e?.target?.type == 'Number') {
      value = Number(value)
    }
    setstate(prev => ({
      ...prev,
      [e?.target?.name]: value
    }))
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (
      !state.productTypeId ||
      !state.brandId ||
      !state.modelId ||
      !state.IMEI ||
      !state.sellingPrice ||
      !state.purchasePrice ||
      !state.color ||
      !state.ram ||
      !state.rom
    ) {
      toast('All fields are required!')
      return
    }

    if (!isValidIMEI(state.IMEI)) {
      toast('IMEI must be exactly 15 digits!')
      return
    }

    setadding(true)
    try {
      const res = await addStockAndroid(state)
      if (res) toast(res.message)
    } catch (err) {
      console.error(err)
      toast('Failed to add stock!')
    } finally {
      setadding(false)
    }
  }

  return (
    <section className='space-y-2'>
      <TableTitle>Add Android</TableTitle>
      <form onSubmit={handleSubmit} className='block space-y-4'>
        <FormContainer>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <InputBox>
              <label htmlFor='brand' className='default'>
                Choose brand
              </label>
              <select
                className='default'
                name='brand'
                id='brand'
                value={state.brandId}
                required={true}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  setstate({ ...state, brandId: e.target.value })
                }}
              >
                <option value='' disabled className='capitalize'>
                  default
                </option>
                {state.productTypeId &&
                  brandByType(brand, state.productTypeId).map(
                    (brand: Brand, idx) => (
                      <option className='capitalize' value={brand.id} key={idx}>
                        {brand.brandName}
                      </option>
                    )
                  )}
              </select>
            </InputBox>
            <InputBox>
              <label htmlFor='model' className='default'>
                Choose Model
              </label>
              <select
                className='default'
                name='model'
                id='model'
                value={state.modelId}
                required={true}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  setstate({ ...state, modelId: e.target.value })
                }}
              >
                <option value='' disabled className='capitalize'>
                  default
                </option>
                {state.brandId &&
                  modelByBrand(model, state.brandId).map(
                    (model: Model, idx) => (
                      <option className='capitalize' value={model.id} key={idx}>
                        {model.model}
                      </option>
                    )
                  )}
              </select>
            </InputBox>
            <InputBox>
              <label htmlFor='IMEI' className='default'>
                IMEI Entry
              </label>
              <input
                type='text'
                id='IMEI'
                name='IMEI'
                className='default'
                placeholder='46 456464 554655 4'
                pattern='[0-9]{15}'
                maxLength={15}
                required={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setstate({ ...state, IMEI: e.target.value })
                }}
                value={state.IMEI}
              />
            </InputBox>
            <InputBox>
              <label htmlFor='purchasePrice' className='default'>
                Purchase Price
              </label>
              <input
                type='number'
                id='purchasePrice'
                name='purchasePrice'
                min={1}
                onChange={e => {
                  setstate(prev => ({
                    ...prev,
                    purchasePrice: Number(e.target.value)
                  }))
                }}
                className='default'
                placeholder='0'
                required={true}
                value={state.purchasePrice || ''}
              />
            </InputBox>
            <InputBox>
              <label htmlFor='sellingPrice' className='default'>
                Selling Price
              </label>
              <input
                type='number'
                id='sellingPrice'
                name='sellingPrice'
                min={1}
                onChange={e => {
                  setstate(prev => ({
                    ...prev,
                    sellingPrice: Number(e.target.value)
                  }))
                }}
                className='default'
                placeholder='0'
                required={true}
                value={state.sellingPrice || ''}
              />
            </InputBox>
            <SelectOption
              labelName='Choose Color'
              name='color'
              options={commonPhoneColors}
              onChange={onChange}
              defaultOptionName='default'
              value={state.color}
            />
            <SelectOption
              labelName='RAM'
              name='ram'
              options={RAM}
              onChange={onChange}
              defaultOptionName='Default'
              value={state.ram || ''}
              required={true}
            />
            <SelectOption
              labelName='ROM'
              name='rom'
              options={ROM}
              onChange={onChange}
              defaultOptionName='Default'
              value={state.rom || ''}
              required={true}
            />

            <SelectOption
              labelName='Dealer'
              name='dealerId'
              options={
                dealers?.map(e => {
                  return { value: e.id, label: e.name }
                }) || []
              }
              onChange={onChange}
              defaultOptionName='Default'
              value={state.dealerId || ''}
              required={true}
            />
          </div>
        </FormContainer>

        <div className='flex justify-end+'>
          <Button variant='primary' disabled={adding}>
            {adding ? 'adding...' : 'add'}
          </Button>
        </div>
      </form>
    </section>
  )
}

export default StockAndroidEntryForm
