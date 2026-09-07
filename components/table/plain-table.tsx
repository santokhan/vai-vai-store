'use client'

import { ReactNode, useState } from 'react'
import ExportButtonGroup from '@/components/export-button'
import PageOutOf from '@/block/add/stock/table/page-number-out-of'
import { inputClasses } from '@/components/table/tw-classes'

type PlainTableColumn<T> = {
  id: string
  label: string
  value: (row: T) => ReactNode
  filter?: 'text' | 'number'
  render?: (row: T) => ReactNode
}

type PlainTableProps<T> = {
  title: string
  data: T[]
  columns: PlainTableColumn<T>[]
  rowKey: (row: T) => string | number
  exportData: (rows: T[]) => Record<string, unknown>[]
}

export default function PlainTable<T>({
  title,
  data,
  columns,
  rowKey,
  exportData
}: PlainTableProps<T>) {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  const filteredRows = data.filter(row =>
    columns.every(column => {
      const filter = filters[column.id]?.trim().toLowerCase()
      if (!filter) return true
      return String(column.value(row) ?? '').toLowerCase().includes(filter)
    })
  )
  const pageCount = Math.max(Math.ceil(filteredRows.length / pageSize), 1)
  const currentPage = Math.min(pageIndex, pageCount - 1)
  const rows = filteredRows.slice(currentPage * pageSize, (currentPage + 1) * pageSize)

  function updateFilter(id: string, value: string) {
    setFilters(previous => ({ ...previous, [id]: value }))
    setPageIndex(0)
  }

  return (
    <div className='rounded-xl bg-white p-4 lg:p-6 space-y-4'>
      <div className='flex items-center justify-between gap-4'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <ExportButtonGroup csv={{ export: () => exportData(filteredRows) }} />
      </div>
      <div className='overflow-x-auto'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              {columns.map(column => (
                <th key={column.id} className='p-2 text-start font-medium uppercase'>
                  <div className='flex flex-col gap-2'>
                    <span className='whitespace-nowrap'>{column.label}</span>
                    {column.filter && (
                      <input
                        type={column.filter}
                        value={filters[column.id] ?? ''}
                        onChange={event => updateFilter(column.id, event.target.value)}
                        placeholder='Search...'
                        className={`w-32 ${inputClasses}`}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y'>
            {rows.map(row => (
              <tr key={rowKey(row)}>
                {columns.map(column => (
                  <td key={column.id} className='p-2 whitespace-nowrap capitalize'>
                    {column.render ? column.render(row) : column.value(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='py-4 space-y-4'>
          <div className='flex items-center gap-2'>
            <button className='border rounded-lg px-2 py-2' onClick={() => setPageIndex(0)} disabled={currentPage === 0}>First</button>
            <button className='border rounded-lg px-2 py-2' onClick={() => setPageIndex(page => Math.max(page - 1, 0))} disabled={currentPage === 0}>Previous</button>
            <button className='border rounded-lg px-2 py-2' onClick={() => setPageIndex(page => Math.min(page + 1, pageCount - 1))} disabled={currentPage >= pageCount - 1}>Next</button>
            <button className='border rounded-lg px-2 py-2' onClick={() => setPageIndex(pageCount - 1)} disabled={currentPage >= pageCount - 1}>Last</button>
            <PageOutOf pageNumber={currentPage + 1} totalPageCount={pageCount} onPageChange={page => setPageIndex(Math.min(Math.max(page, 1), pageCount) - 1)} />
            <select value={pageSize} onChange={event => { setPageSize(Number(event.target.value)); setPageIndex(0) }} className={`w-32 ${inputClasses}`}>
              {[10, 20, 30, 40, 50].map(size => <option key={size} value={size}>Show {size}</option>)}
            </select>
          </div>
          <div>{filteredRows.length} Rows</div>
        </div>
      </div>
    </div>
  )
}