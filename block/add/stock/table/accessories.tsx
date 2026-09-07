'use client'

import Actions, { ActionDelete } from '@/components/table/action'
import PlainTable from '@/components/table/plain-table'
import { AccIncBM } from '@/actions/stock/accessories/get'
import numeral from 'numeral'

export default function StockTableAccessories({ stockAccessories, canDelete }: { stockAccessories: AccIncBM[]; canDelete: boolean }) {
  const columns = [
    { id: 'brand', label: 'Brand', value: (row: AccIncBM) => row.brand.brandName, filter: 'text' as const },
    { id: 'model', label: 'Model', value: (row: AccIncBM) => row.model.model, filter: 'text' as const },
    { id: 'dealer', label: 'Dealer', value: (row: AccIncBM) => row.dealer?.name ?? '', filter: 'text' as const },
    { id: 'purchase price', label: 'Purchase price', value: (row: AccIncBM) => numeral(row.purchasePrice).format('0,0'), filter: 'text' as const },
    { id: 'selling price', label: 'Selling price', value: (row: AccIncBM) => numeral(row.sellingPrice).format('0,0'), filter: 'text' as const },
    { id: 'color', label: 'Color', value: (row: AccIncBM) => row.color, filter: 'text' as const },
    { id: 'quantity', label: 'Quantity', value: (row: AccIncBM) => row.quantity, filter: 'text' as const },
    { id: 'created at', label: 'Created at', value: (row: AccIncBM) => row.createdAt?.toLocaleString() || '', filter: 'text' as const },
    {
      id: 'action', label: 'Action', value: () => '', render: (row: AccIncBM) => (
        <Actions>{canDelete && <ActionDelete handleClick={() => fetch(`/api/stock/table/accessories/delete?id=${row.id}`, { method: 'DELETE' }).then(() => window.location.reload()).catch(console.error)} />}</Actions>
      )
    }
  ]

  return <PlainTable title='Accessories Table' data={stockAccessories} columns={columns} rowKey={row => row.id} exportData={rows => rows.map(row => ({ id: row.id, brand: row.brand.brandName || '', model: row.model.model || '', quantity: row.quantity, purchasePrice: row.purchasePrice, sellingPrice: row.sellingPrice, createdAt: row.createdAt?.toLocaleString() || '' }))} />
}