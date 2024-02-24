// https://tanstack.com/table/v8/docs/examples/react/pagination

'use client';

import { useMemo } from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, ColumnDef, flexRender, } from '@tanstack/react-table';
import { SalesEntry } from '@/prisma/generated/client'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PageOutOf from '@/block/add/stock/table/page-number-out-of';
import Actions, { ActionDelete, ActionViewInvoice } from '@/components/table/action';
import { ORIGIN } from '@/utils/origin';
import { GoToPage, TableFooterContainer, TableFooterRow, tableArrowClasses } from '@/components/table/tanstack/table-footer';
import { inputClasses } from '@/components/table/tanstack/tw-classes';
import THeadFilter from '@/components/table/tanstack/table-filter';
import { TableTitle } from '@/components/table/table-header';
import { ProductDetails } from './product-details-cols';

export default function SalesTable({ salesEntry }: { salesEntry: SalesEntry[] }) {
    const columns = useMemo<ColumnDef<SalesEntry>[]>(() => [
        { id: 'seller', columns: [{ accessorKey: 'seller.name' }] },
        {
            id: 'discount',
            columns: [{
                id: 'discount',
                accessorFn(row) {
                    return row.discount || '';
                }
            }]
        },
        {
            id: 'due',
            columns: [{
                id: 'due',
                accessorFn(row) {
                    return row.due || '';
                }
            }]
        },
        { id: 'customer phone', columns: [{ accessorKey: 'customer.phone' }] },
        { id: 'customer name', columns: [{ accessorKey: 'customer.name' }] },
        {
            id: 'products',
            colSpan: 3,
            columns: [{
                id: 'details',
                cell: ({ row }) => {
                    return (
                        row.original.entity &&
                        <ProductDetails entity={row.original.entity} />
                    )
                }
            }]
        },
        {
            id: 'action', columns: [{
                id: 'action',
                cell: ({ row }) => (
                    <Actions>
                        <ActionViewInvoice invoiceId={row.original.id} />
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
        <div className="rounded-xl bg-white w-full p-6 space-y-4">
            <TableTitle>Sales Table</TableTitle>
            <div className="w-full overflow-x-auto">
                <table className='w-full text-sm'>
                    <thead className='bg-gray-100'>
                        <tr>
                            {headers.map(header =>
                                <th key={header.id} colSpan={header.colSpan} className='p-2 space-y-1 text-start uppercase font-medium'>
                                    <div className="whitespace-nowrap">{flexRender(header.column.parent?.id, header.getContext())}</div>
                                    {header.column.getCanFilter() && <THeadFilter column={header.column} table={table} />}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
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
                </table>
                <TableFooterContainer>
                    <TableFooterRow>
                        <button className={tableArrowClasses} onClick={() => { table.setPageIndex(1) }} disabled={!table.getCanPreviousPage()}><ChevronDoubleLeftIcon className='w-4 h-4' /></button>
                        <button className={tableArrowClasses} onClick={() => { table.previousPage() }} disabled={!table.getCanPreviousPage()}><ChevronLeftIcon className='w-4 h-4' /></button>
                        <button className={tableArrowClasses} onClick={() => { table.nextPage() }} disabled={!table.getCanNextPage()}><ChevronRightIcon className='w-4 h-4' /></button>
                        <button className={tableArrowClasses} onClick={() => { table.setPageIndex(table.getPageCount() - 1) }} disabled={!table.getCanNextPage()}><ChevronDoubleRightIcon className='w-4 h-4' /></button>
                        <PageOutOf pageNumber={table.getState().pagination.pageIndex + 1} totalPageCount={table.getPageCount()} />
                        <GoToPage />
                        <input
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                table.setPageIndex(page)
                            }}
                            className={`w-16 ${inputClasses}`}
                        />
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={e => { table.setPageSize(Number(e.target.value)) }}
                            className={`w-32 ${inputClasses}`}
                        >
                            {[10, 20, 30, 40, 50].map((pageSize, idx) =>
                                <option key={idx} value={pageSize}>Show {pageSize}</option>
                            )}
                        </select>
                    </TableFooterRow>
                    <TableFooterRow>{table.getRowModel().rows.length} Rows</TableFooterRow>
                </TableFooterContainer>
            </div>
        </div>
    )
}
