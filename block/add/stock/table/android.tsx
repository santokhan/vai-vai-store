'use client'

import Actions, { ActionDelete } from '@/components/table/action'
import PlainTable from '@/components/table/plain-table'
import { StockAndroidInclude } from '@/actions/stock/get'
import numeral from 'numeral'

export default function StockAndroidTable({ stockAndroid, canDelete }: { stockAndroid: StockAndroidInclude[]; canDelete: boolean }) {
  const columns = [
    { id: 'brand', label: 'Brand', value: (row: StockAndroidInclude) => row.brand.brandName, filter: 'text' as const },
    { id: 'model', label: 'Model', value: (row: StockAndroidInclude) => row.model.model, filter: 'text' as const },
    { id: 'dealer', label: 'Dealer', value: (row: StockAndroidInclude) => row.dealer?.name ?? '', filter: 'text' as const },
    { id: 'IMEI', label: 'IMEI', value: (row: StockAndroidInclude) => row.IMEI, filter: 'text' as const },
    { id: 'purchase price', label: 'Purchase price', value: (row: StockAndroidInclude) => numeral(row.purchasePrice).format('0,0'), filter: 'text' as const },
    { id: 'selling price', label: 'Selling price', value: (row: StockAndroidInclude) => numeral(row.sellingPrice).format('0,0'), filter: 'text' as const },
    { id: 'ram/rom', label: 'RAM/ROM', value: (row: StockAndroidInclude) => `${row.ram} / ${row.rom}`, filter: 'text' as const },
    { id: 'color', label: 'Color', value: (row: StockAndroidInclude) => row.color, filter: 'text' as const },
    { id: 'sold', label: 'Sold', value: (row: StockAndroidInclude) => String(row.sold), filter: 'text' as const },
    { id: 'created at', label: 'Created at', value: (row: StockAndroidInclude) => row.createdAt?.toLocaleString() || '', filter: 'text' as const },
    {
      id: 'action', label: 'Action', value: () => '', render: (row: StockAndroidInclude) => (
        <Actions>{canDelete && <ActionDelete handleClick={() => fetch(`/api/stock/table/android/delete?id=${row.id}`, { method: 'DELETE' }).then(() => window.location.reload()).catch(console.error)} />}</Actions>
      )
    }
  ]

  return <PlainTable title='Android Table' data={stockAndroid} columns={columns} rowKey={row => row.id} exportData={rows => rows.map(row => ({ id: row.id || '', brand: row.brand.brandName || '', model: row.model.model || '', IMEI: row.IMEI || '', ram: row.ram || '', rom: row.rom || '', color: row.color || '', purchasePrice: row.purchasePrice || '', sellingPrice: row.sellingPrice || '', sold: row.sold, createdAt: row.createdAt?.toLocaleString() || '' }))} />
}