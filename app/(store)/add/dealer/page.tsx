'use client'

import { getDealers } from '@/actions/dealer'
import DealerFormWithTable from '@/block/add/dealer'
// import ReactQueryContext from '@/context/react-query-context'
import { Dealer } from '@/prisma/generated/client'
import { useCallback, useEffect, useState } from 'react'

export default function TypePage () {
  const [loading, setLoading] = useState<boolean>(true)
  const [dealers, setDealers] = useState<Dealer[]>([]) // Explicit type here

  const getAllDealers = useCallback(() => {
    getDealers()
      .then(data => {
        console.log(data)
        if (Array.isArray(data)) {
          setDealers(data)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    getAllDealers()
  }, [getAllDealers])

  return (
    // <ReactQueryContext>
    <DealerFormWithTable
      loading={loading}
      refetch={getAllDealers}
      dealers={dealers}
    />
    // </ReactQueryContext>
  )
}
