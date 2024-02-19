// https://tanstack.com/table/v8/docs/examples/react/pagination
'use client';
import React from 'react';
import { Column, Table as ReactTable, useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StockAndroid } from '@/prisma/generated/client';
import { ORIGIN } from '@/utils/origin';
import PageOutOf from './page-number-out-of';
import Actions, { ActionDelete } from '@/components/table/action';
import { TableFooterContainer, TableFooterRow } from '@/components/table/tanstack/table-footer';

export const tableArrowClasses = "border rounded-lg px-2 py-2 flex items-center hover:bg-gray-100";

interface ServerProps {
    stockAndroid: StockAndroid[],
}

export default function StockTable({ stockAndroid }: ServerProps) {
    const columns = React.useMemo<ColumnDef<StockAndroid>[]>(() => [
        { id: 'name', columns: [{ accessorKey: 'name' }] },
        { id: 'IMEI', columns: [{ accessorKey: 'IMEI' }] },
        { id: 'type', columns: [{ accessorKey: 'productType.type' }] },
        { id: 'brand', columns: [{ accessorKey: 'brand.brandName' }] },
        { id: 'model', columns: [{ accessorKey: 'model.model' }] },
        { id: 'purchase price', columns: [{ accessorKey: 'purchasePrice' }] },
        { id: 'selling price', columns: [{ accessorKey: 'sellingPrice' }] },
        { id: 'ram', columns: [{ accessorKey: 'ram' }] },
        { id: 'rom', columns: [{ accessorKey: 'rom' }] },
        { id: 'color', columns: [{ accessorKey: 'color' }] },
        { id: 'sold', columns: [{ accessorKey: 'sold' }] },
        {
            id: 'action', columns: [{
                id: 'action',
                cell: ({ row }) => (
                    <Actions>
                        <ActionDelete handleClick={() => {
                            fetch(`${ORIGIN}/api/stock/table/android/delete?id=${row.original.id}`, {
                                method: "DELETE"
                            }).then(res => res.json()).then((data) => {
                                window.location.reload();
                            })
                        }} />
                    </Actions>
                )
            }]
        }
    ], []);

    return <Table data={stockAndroid} columns={columns} />
}

type TableProps = {
    data: StockAndroid[]
    columns: ColumnDef<StockAndroid>[];
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
        <div className="rounded-xl bg-white p-4 lg:p-6 space-y-4 overflow-hidden">
            <h4 className="text-xl font-semibold">Android Table</h4>
            <div className="overflow-x-scroll">
                <table className='text-sm'>
                    <thead className='bg-gray-100 rounded-lg'>
                        <tr>
                            {headers.map(header =>
                                <th key={header.id} colSpan={header.colSpan} className='p-2 text-start font-medium uppercase min-w-[3rem]'>
                                    <div className="flex flex-col gap-2">
                                        <span className='whitespace-nowrap'>{header.column.parent?.id}</span>
                                        {header.column.getCanFilter() && <Filter column={header.column} table={table} />}
                                    </div>
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='p-2 whitespace-nowrap'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <TableFooterContainer>
                    <TableFooterRow>
                        <button className={tableArrowClasses} onClick={() => { table.setPageIndex(1) }} disabled={!table.getCanPreviousPage()}><ChevronDoubleLeftIcon className='w-4 h-4' /></button>
                        <button className={tableArrowClasses} onClick={() => { table.previousPage() }} disabled={!table.getCanPreviousPage()}><ChevronLeftIcon className='w-4 h-4' /></button>
                        <button className={tableArrowClasses} onClick={() => { table.nextPage() }} disabled={!table.getCanNextPage()}><ChevronRightIcon className='w-4 h-4' /></button>
                        <button className={tableArrowClasses} onClick={() => { table.setPageIndex(table.getPageCount() - 1) }} disabled={!table.getCanNextPage()}><ChevronDoubleRightIcon className='w-4 h-4' /></button>
                        <PageOutOf pageNumber={table.getState().pagination.pageIndex + 1} totalPageCount={table.getPageCount()} />
                        <span className="flex items-center gap-2 px-2 whitespace-nowrap">| Go to page:
                            <input
                                type="number"
                                defaultValue={table.getState().pagination.pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    table.setPageIndex(page)
                                }}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 h-9 w-28'
                            />
                        </span>
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={e => { table.setPageSize(Number(e.target.value)) }}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 h-9 w-28'
                        >
                            {[10, 20, 30, 40, 50].map((pageSize, idx) =>
                                <option key={idx} value={pageSize}>Show {pageSize}</option>
                            )}
                        </select>
                    </TableFooterRow>
                    <TableFooterRow>
                        {table.getRowModel().rows.length} Rows
                    </TableFooterRow>
                </TableFooterContainer>
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
            placeholder="Search..."
            className="h-9 default font-normal"
        />
    )
}
