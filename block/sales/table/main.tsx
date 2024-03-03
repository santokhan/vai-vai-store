// https://tanstack.com/table/v8/docs/examples/react/pagination

'use client';

import { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, ColumnDef, flexRender, } from '@tanstack/react-table';
import { ProductType, SalesEntry, Brand, Model } from '@/prisma/generated/client'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PageOutOf from '@/block/add/stock/table/page-number-out-of';
import Actions, { ActionDelete, ActionViewInvoice } from '@/components/table/action';
import { ORIGIN } from '@/utils/origin';
import { GoToPage, TableFooterContainer, TableFooterRow, tableArrowClasses } from '@/components/table/tanstack/table-footer';
import { inputClasses } from '@/components/table/tanstack/tw-classes';
import THeadFilter from '@/components/table/tanstack/table-filter';
import { TableTitle } from '@/components/table/table-header';
import { ProductDetails } from './product-details-cols';
import { Due } from './due';
import FilterSales from '@/block/form/sales/sales-filter';
import formatCurrency from '@/utils/currency-formatter';
import downloadSalesCSV from '@/actions/sales/download-csv';
import ExportButtonGroup from '@/components/export-button';
import downloadCSV from '@/components/download-csv';

export interface TypeBrandModel {
    productTypes: ProductType[];
    brands: Brand[];
    models: Model[];
}

interface Props {
    salesEntry: SalesEntry[];
    typeBrandModel: TypeBrandModel;
}

export default function SalesTable({ salesEntry, typeBrandModel }: Props) {
    const columns = useMemo<ColumnDef<SalesEntry>[]>(() => [
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
            id: 'due',
            columns: [{
                id: 'due',
                cell({ row }) {
                    const due = row.original.due || '';
                    return <Due due={due} salesId={row.original.id} />;
                }
            }]
        },
        {
            id: 'due date',
            columns: [{
                id: 'dueDate',
                accessorFn({ due, dueDate }) {
                    return due ? dueDate?.toLocaleString() : '';
                }
            }]
        },
        {
            id: 'discount',
            columns: [{
                id: 'discount',
                accessorFn(row) {
                    return row.discount || '';
                }
            }]
        },
        { id: 'customer phone', columns: [{ accessorKey: 'customer.phone' }] },
        { id: 'customer name', columns: [{ accessorKey: 'customer.name' }] },
        { id: 'seller', columns: [{ accessorKey: 'seller.name' }] },
        {
            id: 'created at',
            columns: [{
                id: 'createdAt',
                accessorFn({ createdAt }) {
                    return createdAt?.toLocaleString();
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
                            }).then(res => res.json()).then(() => {
                                window.location.reload();
                            })
                        }} />
                    </Actions>
                )
            }]
        },
    ], [])

    return <Table salesEntry={salesEntry} columns={columns} typeBrandModel={typeBrandModel} />
}

interface TableProps {
    columns: ColumnDef<SalesEntry>[];
    salesEntry: SalesEntry[];
    typeBrandModel: TypeBrandModel;
}

function Table({ salesEntry, columns, typeBrandModel }: TableProps) {
    const [data, setData] = useState<SalesEntry[]>(salesEntry);
    const [downloadingCSV, setDownloadingCSV] = useState(false);
    // const [downloadingExcel, setDownloadingExcel] = useState(false);

    function filterData(callBack: (entry: SalesEntry, i: number) => void) {
        setData(salesEntry.filter(callBack));
    }

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    });

    const headers = table.getHeaderGroups()[1].headers;

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        data.forEach(({ entity }) => {
            const list = JSON.parse(JSON.stringify(entity));
            list.forEach((e: any) => {
                if (e.price) {
                    if (e.quantity) {
                        totalPrice += e.price * e.quantity;
                    } else {
                        totalPrice += e.price;
                    }
                }
            })
        })
        return totalPrice;
    }

    // function exportToExcel(jsonData: any, filename: string) {
    //     jsonexport(jsonData, { rowDelimiter: "\t" }, function (err: Error, csv: string) {
    //         if (err) return console.error(err);
    //         const blob = new Blob([csv], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    //         const link = document.createElement('a');
    //         link.href = URL.createObjectURL(blob);
    //         link.download = filename + ".xlsx";

    //         // Trigger download
    //         document.body.appendChild(link);
    //         link.click();

    //         // Cleanup
    //         document.body.removeChild(link);
    //         URL.revokeObjectURL(link.href);
    //     });
    // }

    async function tableExportCSV() {
        setDownloadingCSV(true);
        try {
            const json = await downloadSalesCSV();
            if (!json) { return; }

            const filteredJSON = json.map(({ id, entity, due, discount, customer, seller }: any) => {
                return entity.map(
                    ({ brand, model, quantity, price, IMEI }: any, i: number) => (
                        {
                            salesId: id,
                            brand: brand.brandName,
                            model: model.model,
                            IMEI: IMEI ? IMEI.toString() : "",
                            quantity: quantity || 1,
                            price: price,
                            // parent data
                            due: i === 0 ? due : "",
                            discount: i === 0 ? discount : "",
                            customerName: i === 0 ? customer.name : "",
                            customerPhone: i === 0 ? customer.phone : "",
                            seller: i === 0 ? seller.name : "",
                        }
                    )
                ).flat();
            }).flat();

            downloadCSV(filteredJSON, 'sales');
            setDownloadingCSV(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="rounded-xl bg-white w-full p-6 space-y-6">
            <TableTitle>Sales Table</TableTitle>
            <FilterSales filterData={filterData} {...typeBrandModel} />
            <div className="w-full overflow-x-auto">
                <table className='w-full text-sm'>
                    <thead>
                        <tr>
                            <td colSpan={headers.length}>
                                <ExportButtonGroup
                                    csv={{
                                        export: tableExportCSV,
                                        loading: downloadingCSV
                                    }}
                                />
                            </td>
                        </tr>
                        <tr className='bg-gray-100'>
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
                    <tfoot>
                        <tr>
                            <td colSpan={headers.length} className='w-full bg-gray-100 rounded-lg text-center py-1 text-base'>
                                Total Sales Revenue: {formatCurrency(calculateTotalPrice())}
                            </td>
                        </tr>
                    </tfoot>
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