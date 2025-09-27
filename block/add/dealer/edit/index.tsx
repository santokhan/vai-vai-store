'use client'

import { updateDealer } from '@/actions/dealer'
import { FormEvent, useState } from 'react'

export default function DealerEdit ({ dealer }) {
  const [pending, setIsPending] = useState<boolean>(false)
  const [form, setForm] = useState(dealer)

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsPending(true)
    await updateDealer(form.id, form)
    setIsPending(false)
    location.href = '/add/dealer'
  }

  return (
    <div className='space-y-6'>
      <form
        className='bg-white p-6 rounded-xl space-y-6'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-wrap lg:flex-nowrap gap-4'>
          <div className='w-full lg:w-1/2'>
            <label htmlFor='name' className='default'>
              Dealer Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='default'
              placeholder='Store 1'
              required
              value={form.name}
              onChange={e =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
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
              value={form.description}
              onChange={e =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
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
              value={form.phoneNumber}
              onChange={e =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
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
              value={form.location}
              onChange={e =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>
        </div>

        <button className='default' disabled={pending}>
          {pending ? '...' : 'Update Dealer'}
        </button>
      </form>
    </div>
  )
}
