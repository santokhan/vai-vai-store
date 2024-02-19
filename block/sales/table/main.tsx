// https://tanstack.com/table/v8/docs/examples/react/pagination
'use client';
import React, { useMemo } from 'react';
import { Column, Table as ReactTable, PaginationState, useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, ColumnDef, OnChangeFn, flexRender, } from '@tanstack/react-table';
import { SalesEntry } from '@/prisma/generated/client'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { tableArrowClasses } from '@/block/add/stock/table/android';
import PageOutOf from '@/block/add/stock/table/page-number-out-of';
import Actions, { ActionDelete } from '@/components/table/action';
import { ORIGIN } from '@/utils/origin';

export default function SalesTable({ salesEntry }: { salesEntry: SalesEntry[] }) {
    const columns = useMemo<ColumnDef<SalesEntry>[]>(() => [
        { id: 'seller', columns: [{ accessorKey: 'seller.name' }] },
        { id: 'discount', columns: [{ accessorKey: 'discount' }] },
        { id: 'due', columns: [{ accessorKey: 'due' }] },
        { id: 'customer name', columns: [{ accessorKey: 'customer.phone' }] },
        { id: 'customer phone', columns: [{ accessorKey: 'customer.name' }] },
        {
            id: 'action', columns: [{
                id: 'action',
                cell: ({ row }) => (
                    <Actions>
                        <ActionDelete handleClick={() => {
                            fetch(`${ORIGIN}/api/sales/delete?id=${row.original.id}`, {
                                method: "DELETE"
                            }).then(res => res.json()).then((data) => {
                                window.location.reload();
                            })
                        }} />
                    </Actions>
                )
            }]
        },
    ], [])

    return <Table data={salesEntry} columns={columns} />
}

type TableProps = {
    data: SalesEntry[]
    columns: ColumnDef<SalesEntry>[];
}

function Table({ data, columns }: TableProps) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    });

    const headers = table.getHeaderGroups()[1].headers;

    return (
        <div className="rounded-xl bg-white w-full p-6 space-y-6">
            <h5 className="font-semibold">Sales Table</h5>
            <div className="w-full overflow-x-auto">
                <table className='w-full text-sm'>
                    <thead className='bg-gray-100 rounded-lg'>
                        <tr>
                            {headers.map(header =>
                                <th key={header.id} colSpan={header.colSpan} className='p-2 text-start uppercase font-medium'>
                                    {flexRender(header.column.parent?.id, header.getContext())}
                                    {header.column.getCanFilter() && <Filter column={header.column} table={table} />}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row =>
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell =>
                                    <td key={cell.id} className='p-2 whitespace-nowrap'>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                    <tfoot className='space-y-6 mt-6'>
                        <div className="flex items-center gap-2">
                            <button className={tableArrowClasses} onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                                <ChevronDoubleLeftIcon className='w-4 h-4' />
                            </button>
                            <button className={tableArrowClasses} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                                <ChevronLeftIcon className='w-4 h-4' />
                            </button>
                            <button className={tableArrowClasses} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                                <ChevronRightIcon className='w-4 h-4' />
                            </button>
                            <button className={tableArrowClasses} onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
                                <ChevronDoubleRightIcon className='w-4 h-4' />
                            </button>
                            <PageOutOf pageNumber={table.getState().pagination.pageIndex + 1} totalPageCount={table.getPageCount()} />
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
                        <div>{table.getRowModel().rows.length} Rows</div>
                    </tfoot>
                </table>
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
