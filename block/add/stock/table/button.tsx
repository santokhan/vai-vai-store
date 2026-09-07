'use client'

import Actions, { ActionDelete } from '@/components/table/action'
import PlainTable from '@/components/table/plain-table'
import { deleteStockButton } from '@/actions/stock/button/delete'
import { BtnIncBM } from '@/actions/stock/button/get'
import numeral from 'numeral'

export default function StockButtonTable({ stockButton, canDelete }: { stockButton: BtnIncBM[]; canDelete: boolean }) {
  const columns = [
    { id: 'brand', label: 'Brand', value: (row: BtnIncBM) => row.brand.brandName, filter: 'text' as const },
    { id: 'model', label: 'Model', value: (row: BtnIncBM) => row.model.model, filter: 'text' as const },
    { id: 'dealer', label: 'Dealer', value: (row: BtnIncBM) => row.dealer?.name ?? '', filter: 'text' as const },
    { id: 'purchase price', label: 'Purchase price', value: (row: BtnIncBM) => numeral(row.purchasePrice).format('0,0'), filter: 'text' as const },
    { id: 'selling price', label: 'Selling price', value: (row: BtnIncBM) => numeral(row.sellingPrice).format('0,0'), filter: 'text' as const },
    { id: 'color', label: 'Color', value: (row: BtnIncBM) => row.color, filter: 'text' as const },
    { id: 'quantity', label: 'Quantity', value: (row: BtnIncBM) => row.quantity, filter: 'text' as const },
    { id: 'created at', label: 'Created at', value: (row: BtnIncBM) => row.createdAt?.toLocaleString() || '', filter: 'text' as const },
    {
      id: 'action', label: 'Action', value: () => '', render: (row: BtnIncBM) => (
        <Actions>{canDelete && <ActionDelete handleClick={async () => { if (row.id) { await deleteStockButton(row.id); window.location.reload() } }} />}</Actions>
      )
    }
  ]

  return <PlainTable title='Button Table' data={stockButton} columns={columns} rowKey={row => row.id} exportData={rows => rows.map(row => ({ id: row.id, brand: row.brand.brandName || '', model: row.model.model || '', color: row.color || '', quantity: row.quantity, purchasePrice: row.purchasePrice, sellingPrice: row.sellingPrice, createdAt: row.createdAt?.toLocaleString() || '' }))} />
}