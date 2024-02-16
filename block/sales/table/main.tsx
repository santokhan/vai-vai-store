'use client';
import React, { useMemo } from 'react'
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

import { SalesEntry } from '@/prisma/generated/client'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { tableArrowClasses } from '@/block/add/stock/table/android';

export default function SalesTable({ salesEntry }: { salesEntry: SalesEntry[] }) {
    console.log(salesEntry);

    const columns = useMemo<ColumnDef<SalesEntry>[]>(() => [
        {
            id: 'id',
            columns: [
                {
                    accessorKey: 'id',
                },
            ],
        },
        {
            id: 'seller.name',
            columns: [
                {
                    accessorKey: 'seller.name',
                },
            ],
        },
        {
            id: 'discount',
            columns: [
                {
                    accessorKey: 'discount',
                },
            ],
        },
        {
            id: 'due',
            columns: [
                {
                    accessorKey: 'due',
                },
            ],
        },
        {
            id: 'customer.phone',
            columns: [
                {
                    accessorKey: 'customer.phone',
                },
            ],
        },
        {
            id: 'customer.name',
            columns: [
                {
                    accessorKey: 'customer.name',
                },
            ],
        },
    ], [])

    function reFetch() {
        // salesEntryQuery.refetch();
    }

    return (
        <Table data={salesEntry} columns={columns} reFetch={reFetch} />
    )
}

type TableProps = {
    data: SalesEntry[]
    columns: ColumnDef<SalesEntry>[];
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

    return (
        <div className="rounded-xl bg-white w-full p-5 space-y-6">
            <h5 className="font-semibold">Sales Table</h5>
            <div className="w-full p-2">
                <div className="w-full overflow-x-auto pb-2">
                    <table className='w-full'>
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
                    <button className={tableArrowClasses}
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    ><ChevronDoubleLeftIcon className='w-4 h-4' /></button>
                    <button className={tableArrowClasses}
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    ><ChevronLeftIcon className='w-4 h-4' /></button>
                    <button className={tableArrowClasses}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    ><ChevronRightIcon className='w-4 h-4' /></button>
                    <button className={tableArrowClasses}
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
