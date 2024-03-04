// https://tanstack.com/table/v8/docs/examples/react/pagination

'use client';

import { useMemo } from 'react'
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, ColumnDef, flexRender } from '@tanstack/react-table'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { GoToPage, TableFooterContainer, TableFooterRow, tableArrowClasses } from '@/components/table/tanstack/table-footer'
import PageOutOf from './page-number-out-of'
import { TableTitle } from '@/components/table/table-header'
import THeadFilter from '@/components/table/tanstack/table-filter'
import { inputClasses } from '@/components/table/tanstack/tw-classes'
import Actions, { ActionDelete } from '@/components/table/action'
import { deleteStockButton } from '@/actions/stock/button/delete';
import { BtnIncBM } from '@/actions/stock/button/get';
import ExportButtonGroup from '@/components/export-button';
import downloadCSV from '@/components/download-csv';
import numeral from 'numeral';

export default function StockButtonTable({ stockButton }: { stockButton: BtnIncBM[] }) {
    const columns = useMemo<ColumnDef<BtnIncBM>[]>(() => [
        {
            id: 'brand',
            columns: [
                {
                    id: "brand",
                    accessorFn(row) { return row.brand.brandName },
                },
            ],
        },
        {
            id: 'model',
            columns: [
                {
                    id: "model",
                    accessorFn(row) { return row.model.model },
                },
            ],
        },
        {
            id: 'purchase price',
            columns: [{
                id: 'purchase price',
                accessorFn(row) {
                    return numeral(row.purchasePrice).format('0,0');
                }
            }]
        },
        {
            id: 'selling price',
            columns: [{
                id: 'selling price',
                accessorFn(row) {
                    return numeral(row.sellingPrice).format('0,0');
                }
            }]
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
            id: 'quantity',
            columns: [
                {
                    accessorKey: 'quantity',
                },
            ],
        },
        {
            id: 'created at',
            columns: [{
                id: 'created at',
                accessorFn(row) { return row.createdAt?.toLocaleString() || '' },
            }]
        },
        {
            id: 'action',
            columns: [{
                id: 'action',
                cell: ({ row }) => (
                    <Actions>
                        <ActionDelete handleClick={async () => {
                            if (row.original.id) {
                                const response = await deleteStockButton(row.original.id);
                            }
                        }} />
                    </Actions>
                )
            }]
        }
    ], [])


    return (
        <>
            {stockButton && <Table data={stockButton} columns={columns} />}
        </>
    )
}

type TableProps = {
    data: BtnIncBM[]
    columns: ColumnDef<BtnIncBM>[];
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

    function tableToExport() {
        const json = table.getFilteredRowModel().rows.map(row => {
            const og = row.original;
            return {
                id: og.id,
                brand: og.brand.brandName || "",
                model: og.model.model || "",
                color: og.color || "",
                quantity: og.quantity,
                purchasePrice: og.purchasePrice,
                sellingPrice: og.sellingPrice,
                createdAt: og.createdAt?.toLocaleString() || "",
            }
        })

        downloadCSV(json, 'stock');
    }

    return (
        <div className="rounded-xl bg-white p-4 lg:p-6 space-y-4">
            <TableTitle>Button Table</TableTitle>
            <div className="overflow-x-auto">
                <table className='w-full text-sm'>
                    <thead>
                        <tr>
                            <td colSpan={headers.length}>
                                <ExportButtonGroup csv={{
                                    export: tableToExport
                                }} />
                            </td>
                        </tr>
                        <tr className='bg-gray-100'>
                            {headers.map(header =>
                                <th key={header.id} colSpan={header.colSpan} className='p-2 text-start font-medium uppercase'>
                                    <div className='whitespace-nowrap capitalize'>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </div>
                                    {header.column.getCanFilter() && <THeadFilter column={header.column} table={table} />}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {table.getRowModel().rows.map(row =>
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='p-2 whitespace-nowrap capitalize'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
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
                    <TableFooterRow>
                        {table.getRowModel().rows.length} Rows
                    </TableFooterRow>
                </TableFooterContainer>
            </div>
        </div>
    )
}