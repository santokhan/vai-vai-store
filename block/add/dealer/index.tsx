'use client'

import { createDealer } from '@/actions/dealer'
import { DealerTable } from '@/components/table/dealer-table'
import { FormEvent, useState } from 'react'
import { Dealer } from '@/prisma/generated/client'
import { revalidatePath } from 'next/cache'

type Props = {
  dealers?: Dealer[]
}

export default function DealerFormWithTable ({ dealers = [] }: Props) {
  const [adding, setAdding] = useState<boolean>(false)

  // Add a new dealer
  async function postDealer (
    name: string,
    description?: string,
    phoneNumber?: string,
    location?: string
  ) {
    if (!name) {
      console.log('Cannot read undefined type')
      return
    }
    await createDealer({ name, description, phoneNumber, location })
    setAdding(false)
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const dealerName = formData.get('dealer')
    const dealerDescription = formData.get('description')
    const dealerPhone = formData.get('phoneNumber')
    const dealerLocation = formData.get('location')

    if (typeof dealerName === 'string') {
      setAdding(true)
      await postDealer(
        dealerName.trim(),
        typeof dealerDescription === 'string'
          ? dealerDescription.trim()
          : undefined,
        typeof dealerPhone === 'string' ? dealerPhone.trim() : undefined,
        typeof dealerLocation === 'string' ? dealerLocation.trim() : undefined
      )
      location.reload()
    }
  }

  return (
    <div className='space-y-6'>
      <form
        className='bg-white p-6 rounded-xl space-y-6'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-wrap lg:flex-nowrap gap-4'>
          <div className='w-full lg:w-1/2'>
            <label htmlFor='dealer' className='default'>
              Dealer Name
            </label>
            <input
              type='text'
              id='dealer'
              name='dealer'
              className='default'
              placeholder='Store 1'
              required
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <label htmlFor='description' className='default'>
              Description (optional)
            </label>
            <input
              type='text'
              id='description'
              name='description'
              className='default'
              placeholder='Any extra info'
            />
          </div>
        </div>

        <div className='flex flex-wrap lg:flex-nowrap gap-4'>
          <div className='w-full lg:w-1/2'>
            <label htmlFor='phoneNumber' className='default'>
              Phone Number (optional)
            </label>
            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              className='default'
              placeholder='01234567890'
              minLength={0}
              maxLength={11}
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <label htmlFor='location' className='default'>
              Location (optional)
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='default'
              placeholder='City, Street, etc.'
            />
          </div>
        </div>

        <button className='default' disabled={adding}>
          {adding ? '...' : 'Add Dealer'}
        </button>
      </form>

      {dealers && (
        <div>
          <DealerTable types={dealers} />
        </div>
      )}
    </div>
  )
}
