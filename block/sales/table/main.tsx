"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type ReactNode } from "react";
import numeral from "numeral";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ProductType, Brand, Model } from "@/prisma/generated/client";
import Actions, { ActionViewInvoice } from "@/components/table/action";
import PageOutOf from "@/block/add/stock/table/page-number-out-of";
import ExportButtonGroup from "@/components/export-button";
import downloadCSV from "@/components/download-csv";
import { getStockByType } from "@/actions/stock/get-stock-by-type";
import { SalesInclude_C_S } from "@/actions/sales/get";
import { ProductDetails } from "./product-details-cols";
import { Due } from "./due";
const tableArrowClasses =
  "border rounded-lg px-2 py-2 flex items-center hover:bg-gray-100";
const TableFooterContainer = ({ children }: { children: ReactNode }) => (
  <div className="py-4 space-y-4">{children}</div>
);
const TableFooterRow = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2">{children}</div>
);

export interface TypeBrandModel {
  productTypes: ProductType[];
  brands: Brand[];
  models: Model[];
}

interface Props {
  typeBrandModel: TypeBrandModel;
  salesEntry: SalesInclude_C_S[];
  page: number;
  totalPages: number;
  totalRows: number;
}

export default function SalesTable({
  salesEntry,
  page,
  totalPages,
  totalRows,
}: Props) {
  const [downloadingCSV, setDownloadingCSV] = useState(false);
  const router = useRouter();
  const currentParams = useSearchParams();
  const headers = [
    "Seller",
    "Customer Name",
    "Customer Phone",
    "Product",
    "Discount",
    "Due",
    "Due Date",
    "Created At",
    "Total Price",
    "Action",
  ];

  function goTo(nextPage: number) {
    const params = new URLSearchParams(currentParams.toString());
    params.set("page", String(Math.min(Math.max(nextPage, 1), totalPages)));
    router.push(`?${params.toString()}`);
  }

  function calculateTotalPrice() {
    return salesEntry.reduce((total, sale) => {
      if (!Array.isArray(sale.entity)) return total;
      return (
        total +
        sale.entity.reduce(
          (sum: number, item: any) =>
            sum + (item.price || 0) * (item.quantity || 1),
          0,
        )
      );
    }, 0);
  }

  async function tableExportCSV() {
    setDownloadingCSV(true);
    try {
      const rows = (
        await Promise.all(
          salesEntry.map(async (sale) => {
            if (!Array.isArray(sale.entity))
              return [{ id: sale.id, due: sale.due }];
            return Promise.all(
              sale.entity.map(async (entity: any, index: number) => {
                const stock = entity.type
                  ? await getStockByType(entity.type, entity.stockId)
                  : null;
                return {
                  id: sale.id,
                  due: index === 0 ? sale.due : "N/A",
                  dueDate:
                    index === 0 ? sale.dueDate?.toLocaleDateString() : "N/A",
                  discount: index === 0 ? sale.discount : "N/A",
                  customerName: index === 0 ? sale.customer.name : "N/A",
                  customerPhone: index === 0 ? sale.customer.phone : "N/A",
                  seller: index === 0 ? sale.seller.name : "N/A",
                  createdAt:
                    index === 0 ? sale.createdAt.toLocaleDateString() : "N/A",
                  brand: stock?.brand.brandName || "N/A",
                  model: stock?.model.model || "N/A",
                  price: entity.price,
                  quantity: entity.quantity,
                };
              }),
            );
          }),
        )
      ).flat();
      downloadCSV(rows, "sales");
    } finally {
      setDownloadingCSV(false);
    }
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <td colSpan={headers.length}>
              <ExportButtonGroup
                csv={{ export: tableExportCSV, loading: downloadingCSV }}
              />
            </td>
          </tr>
          <tr>
            {headers.map((header, index) => (
              <th
                key={header}
                className={[
                  "p-2 text-start uppercase font-medium bg-gray-100 whitespace-nowrap",
                  index === 0 ? "rounded-l-lg" : "",
                  index === headers.length - 1 ? "rounded-r-lg" : "",
                ].join(" ")}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {salesEntry.map((sale) => (
            <tr key={sale.id}>
              <td className="p-2 whitespace-nowrap">{sale.seller.name}</td>
              <td className="p-2 whitespace-nowrap">{sale.customer.name}</td>
              <td className="p-2 whitespace-nowrap">{sale.customer.phone}</td>
              <td className="p-2 whitespace-nowrap">
                {sale.entity && <ProductDetails entity={sale.entity} />}
              </td>
              <td className="p-2 whitespace-nowrap">
                {numeral(sale.discount).format("0,0")}
              </td>
              <td className="p-2 whitespace-nowrap">
                <Due due={numeral(sale.due).format("0,0")} salesId={sale.id} />
              </td>
              <td className="p-2 whitespace-nowrap">
                {sale.due ? sale.dueDate?.toLocaleString() : ""}
              </td>
              <td className="p-2 whitespace-nowrap">
                {sale.createdAt.toLocaleString()}
              </td>
              <td className="p-2 whitespace-nowrap">
                {numeral(
                  Array.isArray(sale.entity)
                    ? sale.entity.reduce(
                        (sum: number, item: any) =>
                          sum + item.price * item.quantity,
                        0,
                      )
                    : 0,
                ).format("0,0")}
              </td>
              <td className="p-2 whitespace-nowrap">
                <Actions>
                  <ActionViewInvoice invoiceId={sale.id} />
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t">
            <td colSpan={8}></td>
            <td className="text-end p-1 text-base whitespace-nowrap">
              Total Sales Price
            </td>
            <td className="p-1 text-base whitespace-nowrap">
              {numeral(calculateTotalPrice()).format("0,0")}
            </td>
          </tr>
        </tfoot>
      </table>
      <TableFooterContainer>
        <TableFooterRow>
          <button
            className={tableArrowClasses}
            onClick={() => goTo(page - 1)}
            disabled={page <= 1}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            className={tableArrowClasses}
            onClick={() => goTo(page + 1)}
            disabled={page >= totalPages}
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
          <PageOutOf
            pageNumber={page}
            totalPageCount={totalPages}
            onPageChange={goTo}
          />
        </TableFooterRow>
      </TableFooterContainer>
    </div>
  );
}
