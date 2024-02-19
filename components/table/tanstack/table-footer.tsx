// https://tanstack.com/table/v8/docs/examples/react/pagination
'use client';
import React from 'react';
import { Table } from '@tanstack/react-table';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PageOutOf from '@/block/add/stock/table/page-number-out-of';
import { OnlyChildrenProps } from '@/utils/props-type';
import { inputClasses } from './tw-classes';

export const tableArrowClasses = "border rounded-lg px-2 py-2 flex items-center hover:bg-gray-100";

export const TableFooterContainer = ({ children }: OnlyChildrenProps) => (
    <div className="py-4 space-y-4">{children}</div>
)

export const TableFooterRow = ({ children }: OnlyChildrenProps) => (
    <div className="flex items-center gap-2">{children}</div>
)

export const GoToPage = () => <span className="whitespace-nowrap">| Go to page:</span>

export default function TanStackTableFooter<T extends Table<object>>({ table }: { table: T }) {
    return (
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
    )
}
