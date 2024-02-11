// https://tanstack.com/table/v8/docs/examples/react/pagination

'use client'
import React, { useEffect } from 'react'

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
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { makeData } from './makeData'
import { InStock } from '@/prisma/generated/client'
import { useQuery } from 'react-query'
import { ORIGIN } from '@/utils/origin'

export default function StockTable() {
    const columns = React.useMemo<ColumnDef<InStock>[]>(() => [
        {
            id: 'Name',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'name',
                    cell: info => info.getValue(),
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'IMEI',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'IMEI',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'Product Type',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'productType.type',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'Brand',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'brand.brandName',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'Model',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'model.model',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'Purchase Price',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'purchasePrice',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'Model',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'price',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'RAM',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'ram',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'ROM',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'rom',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'Color',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'color',
                    footer: props => props.column.id,
                },
            ],
        },
        {
            id: 'Sold',
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: 'sold',
                    footer: props => props.column.id,
                },
            ],
        },
    ], [])

    const [data, setData] = React.useState(() => makeData(100000))

    // Santo
    const inStockQuery = useQuery('getAllInStock', () =>
        fetch(`${ORIGIN}/api/stock/table/android`, {
            cache: 'no-store'
        }).then(res => res.json()).then((data: InStock[]) => data),
        { cacheTime: 0 }
    )

    function reFetch() {
        inStockQuery.refetch();
    }

    return (
        <>
            {inStockQuery.data && <Table data={inStockQuery.data} columns={columns} reFetch={reFetch} />}
        </>
    )
}

type TableProps = {
    data: InStock[]
    columns: ColumnDef<InStock>[];
    reFetch: () => void;
}

function Table({ data, columns, reFetch }: TableProps) {
    const table = useReactTable({
        data,
        columns,
        // Pipeline
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        //
        debugTable: true,
    });
    const headerGroups = table.getHeaderGroups();
    headerGroups.unshift();

    const arrowClasses = "border rounded-lg px-2 py-2 flex items-center hover:bg-gray-100";

    return (
        <div className="rounded-xl bg-white p-6 space-y-6 overflow-hidden">
            <h4 className="text-xl font-semibold">Android Table</h4>
            <div className="overflow-x-scroll pb-2">
                <table>
                    <thead className='bg-gray-100'>
                        <tr>
                            {headerGroups[1].headers.map(header =>
                                <th key={header.id} colSpan={header.colSpan} className='p-2 text-start border'>
                                    {header.isPlaceholder ? null : (
                                        <div className='font-medium'>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {header.column.getCanFilter() && <Filter column={header.column} table={table} />}
                                        </div>
                                    )}
                                </th>
                            )}
                        </tr>
                        {/* {headerGroups.map(headerGroup =>)} */}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row =>
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='p-2 border whitespace-nowrap'>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center gap-2 py-2">
                <button className={arrowClasses}
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                ><ChevronDoubleLeftIcon className='w-4 h-4' /></button>
                <button className={arrowClasses}
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                ><ChevronLeftIcon className='w-4 h-4' /></button>
                <button className={arrowClasses}
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                ><ChevronRightIcon className='w-4 h-4' /></button>
                <button className={arrowClasses}
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                ><ChevronDoubleRightIcon className='w-4 h-4' /></button>
                <span className="flex items-center gap-1 px-2">
                    <span>Page</span>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span className="flex items-center gap-2 px-2">| Go to page:
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
                    {[10, 20, 30, 40, 50].map((pageSize, idx) =>
                        <option key={idx} value={pageSize}>Show {pageSize}</option>
                    )}
                </select>
                {/* () => table.setPageIndex(table.getPageCount() - 1) */}
                <button type="button" onClick={reFetch}
                    className="border rounded-lg px-2 py-1 grid place-items-center hover:bg-gray-100"
                >Reload</button>
            </div>
            <div className='py-2'>{table.getRowModel().rows.length} Rows</div>
            {/* <div className="py-2"><pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre></div> */}
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
