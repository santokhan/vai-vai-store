// https://tanstack.com/table/v8/docs/examples/react/pagination
'use client';

import { useMemo } from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StockAndroid } from '@/prisma/generated/client';
import { ORIGIN } from '@/utils/origin';
import PageOutOf from './page-number-out-of';
import Actions, { ActionDelete } from '@/components/table/action';
import { GoToPage, TableFooterContainer, TableFooterRow } from '@/components/table/tanstack/table-footer';
import THeadFilter from '@/components/table/tanstack/table-filter';
import { inputClasses } from '@/components/table/tanstack/tw-classes';
import { TableTitle } from '@/components/table/table-header';

export const tableArrowClasses = "border rounded-lg px-2 py-2 flex items-center hover:bg-gray-100";

export default function StockTable({ stockAndroid }: { stockAndroid: StockAndroid[] }) {
    const columns = useMemo<ColumnDef<StockAndroid>[]>(() => [
        { id: 'brand', columns: [{ accessorKey: 'brand.brandName' }] },
        { id: 'model', columns: [{ accessorKey: 'model.model' }] },
        { id: 'IMEI', columns: [{ accessorKey: 'IMEI' }] },
        { id: 'purchase price', columns: [{ accessorKey: 'purchasePrice' }] },
        { id: 'selling price', columns: [{ accessorKey: 'sellingPrice' }] },
        { id: 'ram/rom', columns: [{ accessorFn: row => `${row.ram} / ${row.rom}`, id: 'ram/rom' }] },
        { id: 'color', columns: [{ accessorKey: 'color' }] },
        {
            id: 'sold',
            columns: [{
                accessorFn: row => `${row.sold}`,
                id: 'sold',
                // filterFn: (row, columnId, filterValue) => {
                //     const status = row.getValue(columnId as string);

                //     if (typeof status == 'string') {
                //         const a = status.trim().toLowerCase();
                //         const b = filterValue.trim().toLowerCase();
                //         return a.includes(b);
                //     } else {
                //         return true;
                //     }
                // }
            }]
        },
        {
            id: 'action',
            columns: [{
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
        <div className="rounded-xl bg-white p-4 lg:p-6 space-y-4">
            <TableTitle>Android Table</TableTitle>
            <div className="overflow-x-auto">
                <table className='w-full text-sm'>
                    <thead className='bg-gray-100'>
                        <tr>
                            {headers.map(header =>
                                <th key={header.id} colSpan={header.colSpan} className='p-2 text-start font-medium uppercase min-w-[3rem]'>
                                    <div className="flex flex-col gap-2">
                                        <span className='whitespace-nowrap'>{header.column.parent?.id}</span>
                                        {header.column.getCanFilter() && <THeadFilter column={header.column} table={table} />}
                                    </div>
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='p-2 whitespace-nowrap capitalize'>
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