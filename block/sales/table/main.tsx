// https://tanstack.com/table/v8/docs/examples/react/pagination

'use client'
import React, { useEffect } from 'react'
import './index.css'

import {
    Column,
    Table as ReactTable,
    PaginationState,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    OnChangeFn,
    flexRender,
} from '@tanstack/react-table'

import { makeData } from './makeData'
import { SalesEntry } from '@/prisma/generated/client'
import { useQuery } from 'react-query'
import { ORIGIN } from '@/utils/origin'
import { dummyProductData } from '@/utils/default-data'

export default function SalesTable() {
    const rerender = React.useReducer(() => ({}), {})[1];

    const columns = React.useMemo<ColumnDef<SalesEntry>[]>(() => [
        {
            header: 'Name',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'customer.name',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            header: 'IMEI',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'IMEI',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            header: 'Price',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'price',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            header: 'Discount',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'discount',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            header: 'Due',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'due',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            header: 'Due Date',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'dueDate',
                    footer: props => props.column.id,
                },
            ],
        },
    ], [])

    const [data, setData] = React.useState(() => makeData(100000))
    const refreshData = () => setData(() => makeData(100000))

    // Santo
    const salesEntryQuery = useQuery('getAllInStock', () =>
        fetch(`${ORIGIN}/api/sales/table`).then(res => res.json()).then((data: SalesEntry[]) => data)
    )

    useEffect(() => {
        salesEntryQuery.refetch();
    }, [])

    return (
        <>
            {salesEntryQuery.data && <Table data={salesEntryQuery.data} columns={columns} />}
            {/* <hr />
            <div>
                <button onClick={() => rerender()}>Force Rerender</button>
            </div>
            <div>
                <button onClick={() => refreshData()}>Refresh Data</button>
            </div> */}
        </>
    )
}

type TableProps = {
    data: SalesEntry[]
    columns: ColumnDef<SalesEntry>[]
}

function Table({ data, columns }: TableProps) {
    const table = useReactTable({
        data,
        columns,
        // Pipeline
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        //
        debugTable: true,
    })

    return (
        <div className="rounded-xl bg-white w-full p-5 space-y-6">
            <div className="w-full p-2">
                <div className="w-full overflow-x-auto pb-2">
                    <table className='w-full'>
                        <thead className='bg-gray-100'>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => {
                                        return (
                                            <th key={header.id} colSpan={header.colSpan} className='p-2 text-start'>
                                                {header.isPlaceholder ? null : (
                                                    <div className='font-medium'>
                                                        {flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                        {header.column.getCanFilter() ? (
                                                            <div>
                                                                <Filter column={header.column} table={table} />
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                )}
                                            </th>
                                        )
                                    })}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map(row => {
                                return (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map(cell => {
                                            return (
                                                <td key={cell.id} className='p-2 border whitespace-nowrap'>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center gap-2 py-2">
                    <button
                        className="border rounded-lg px-2 py-1 grid place-items-center hover:bg-gray-100"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </button>
                    <button
                        className="border rounded-lg px-2 py-1 grid place-items-center hover:bg-gray-100"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </button>
                    <button
                        className="border rounded-lg px-2 py-1 grid place-items-center hover:bg-gray-100"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </button>
                    <button
                        className="border rounded-lg px-2 py-1 grid place-items-center hover:bg-gray-100"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </button>
                    <span className="flex items-center gap-1 px-2">
                        <div>Page</div>
                        <strong>
                            {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount()}
                        </strong>
                    </span>
                    <span className="flex items-center gap-2 px-2">
                        | Go to page:
                        <input
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                table.setPageIndex(page)
                            }}
                            className="default !h-9 !w-16 !py-0"
                        />
                    </span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={e => {
                            table.setPageSize(Number(e.target.value))
                        }}
                        className='default !h-9 !w-32 !py-0'
                    >
                        {[10, 20, 30, 40, 50].map((pageSize, idx) => (
                            <option key={idx} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                    <button type="button" onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        className="border rounded-lg px-2 py-1 grid place-items-center hover:bg-gray-100"
                    >
                        Reload
                    </button>
                </div>
                <div className='py-2'>{table.getRowModel().rows.length} Rows</div>
                {/* <div className="py-2">
                <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
            </div> */}
            </div>
        </div>
    )
}

export type FilterProps = {
    column: Column<any, any>
    table: ReactTable<any>
}

function Filter({ column, table, }: FilterProps) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)
    const columnFilterValue = column.getFilterValue()

    return typeof firstValue === 'number' ? (
        <div className="flex space-x-2">
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[0] ?? ''}
                onChange={e =>
                    column.setFilterValue((old: [number, number]) => [
                        e.target.value,
                        old?.[1],
                    ])
                }
                placeholder={`Min`}
                className="h-9 default font-normal"
            />
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[1] ?? ''}
                onChange={e =>
                    column.setFilterValue((old: [number, number]) => [
                        old?.[0],
                        e.target.value,
                    ])
                }
                placeholder={`Max`}
                className="h-9 default font-normal"
            />
        </div>
    ) : (
        <input
            type="text"
            value={(columnFilterValue ?? '') as string}
            onChange={e => column.setFilterValue(e.target.value)}
            placeholder={`Search...`}
            className="h-9 default font-normal"
        />
    )
}
