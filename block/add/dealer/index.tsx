'use client'

import { createDealer, getDealers } from '@/actions/dealer'
import { DealerTable } from '@/components/table/dealer-table'
import { Dealer } from '@/prisma/generated/client'
import { FormEvent, useEffect, useState } from 'react'

export default function DealerFormWithTable () {
  const [adding, setAdding] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [dealers, setDealers] = useState<Dealer[]>([])

  useEffect(() => {
    getDealers()
      .then(data => {
        if (data) {
          setDealers(data)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  // Add a new dealer
  async function postDealer (name: string, description?: string) {
    if (!name) {
      console.log('Cannot read undefined type')
      return
    }
    await createDealer({ name, description })
    setAdding(false)
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const dealerName = formData.get('dealer')
    const dealerDescription = formData.get('description')

    if (typeof dealerName === 'string') {
      setAdding(true)
      await postDealer(
        dealerName.trim(),
        typeof dealerDescription === 'string'
          ? dealerDescription.trim()
          : undefined
      )
      await getDealers().then(data => {
        if (data) {
          setDealers(data)
        }
      })
    }
  }

  return loading ? null : (
    <div className=''>
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
          <button className='default' disabled={adding}>
            {adding ? '...' : 'Add Dealer'}
          </button>
        </form>
        {dealers && (
          <div className=''>
            <DealerTable types={dealers} />
          </div>
        )}
      </div>
    </div>
  )
}
