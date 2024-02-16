// https://tanstack.com/table/v8/docs/examples/react/pagination

'use client';
import React from 'react';

import {
    Column,
    Table as ReactTable,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { StockAndroid, } from '@/prisma/generated/client'
import { useRouter } from 'next/navigation'

export const tableArrowClasses = "border rounded-lg px-2 py-2 flex items-center hover:bg-gray-100";

interface ServerProps {
    stockAndroid: StockAndroid[],
}

export default function StockTable({ stockAndroid }: ServerProps) {
    const columns = React.useMemo<ColumnDef<StockAndroid>[]>(() => [
        {
            id: 'name',
            columns: [
                {
                    accessorKey: 'name',
                },
            ],
        },
        {
            id: 'IMEI',
            columns: [
                {
                    accessorKey: 'IMEI',
                },
            ],
        },
        {
            id: 'type',
            columns: [
                {
                    accessorKey: 'productType.type',
                },
            ],
        },
        {
            id: 'brand',
            columns: [
                {
                    accessorKey: 'brand.brandName',
                },
            ],
        },
        {
            id: 'model',
            columns: [
                {
                    accessorKey: 'model.model',
                },
            ],
        },
        {
            id: 'purchase price',
            columns: [
                {
                    accessorKey: 'purchasePrice',
                },
            ],
        },
        {
            id: 'selling price',
            columns: [
                {
                    accessorKey: 'sellingPrice',
                },
            ],
        },
        {
            id: 'ram',
            columns: [
                {
                    accessorKey: 'ram',
                },
            ],
        },
        {
            id: 'rom',
            columns: [
                {
                    accessorKey: 'rom',
                },
            ],
        },
        {
            id: 'color',
            columns: [
                {
                    accessorKey: 'color',
                },
            ],
        },
        {
            id: 'sold',
            columns: [
                {
                    accessorKey: 'sold',
                },
            ],
        },
    ], [])

    return (
        <Table data={stockAndroid} columns={columns} />
    )
}

type TableProps = {
    data: StockAndroid[]
    columns: ColumnDef<StockAndroid>[];
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
    });

    const headers = table.getHeaderGroups()[1].headers;
    const router = useRouter();

    return (
        <div className="rounded-xl bg-white p-6 space-y-6 overflow-hidden">
            <h4 className="text-xl font-semibold">Android Table</h4>
            <div className="overflow-x-scroll">
                <table>
                    <thead className='bg-gray-100'>
                        {headers.map(header =>
                            <th key={header.id} colSpan={header.colSpan} className='p-2 text-start border font-medium uppercase text-sm'>
                                <>
                                    {header.column.parent?.id}
                                    {header.column.getCanFilter() && <Filter column={header.column} table={table} />}
                                </>
                            </th>
                        )}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row =>
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='p-2 border whitespace-nowrap'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center gap-2 py-2">
                <button className={tableArrowClasses}
                    onClick={() => {
                        table.setPageIndex(1)
                    }}
                    disabled={!table.getCanPreviousPage()}
                ><ChevronDoubleLeftIcon className='w-4 h-4' /></button>
                <button className={tableArrowClasses}
                    onClick={() => {
                        table.previousPage()
                    }}
                    disabled={!table.getCanPreviousPage()}
                ><ChevronLeftIcon className='w-4 h-4' /></button>
                <button className={tableArrowClasses}
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                ><ChevronRightIcon className='w-4 h-4' /></button>
                <button className={tableArrowClasses}
                    onClick={() => {
                        table.setPageIndex(table.getPageCount() - 1)
                    }}
                    disabled={!table.getCanNextPage()}
                ><ChevronDoubleRightIcon className='w-4 h-4' /></button>
                <span className="flex items-center gap-1 px-2">
                    <span>Page</span>
                    <strong>{table.getState().pagination.pageIndex + 1}</strong> out of
                    <strong>{table.getPageCount()}</strong>
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
            </div>
            <div className='py-2'>{table.getRowModel().rows.length} Rows</div>
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
            placeholder="Search..."
            className="h-9 default font-normal"
        />
    )
}
