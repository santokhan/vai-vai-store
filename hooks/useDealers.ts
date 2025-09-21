'use client'

import { getDealers } from '@/actions/dealer'
import { Dealer } from '@/prisma/generated/client'
import { useEffect, useState } from 'react'

export default function useDealers () {
  const [dealers, setDealers] = useState<Dealer[]>([])

  useEffect(() => {
    getDealers().then(data => {
      if (Array.isArray(data)) {
        setDealers(data)
      }
    })
  }, [])

  return { dealers }
}
