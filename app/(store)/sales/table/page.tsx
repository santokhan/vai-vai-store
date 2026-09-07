import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import { getSalesPage } from "@/actions/sales/get";
import FilterSales from "@/block/form/sales/sales-filter";
import SalesTable from "@/block/sales/table/main";
import { TableTitle } from "@/components/table/table-header";

export const dynamic = "force-dynamic";

export default async function SalesTablePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const productTypes = await getType();
  const brands = await getBrand();
  const models = await getModel();
  const value = (key: string) => { const item = searchParams[key]; return Array.isArray(item) ? item[0] : item; };
  const salesPage = await getSalesPage({ imei: value("imei"), startDate: value("startDate"), endDate: value("endDate"), page: Number(value("page")) || 1 });

  if (productTypes && brands && models) {
    return (
      <div className="rounded-xl bg-white w-full p-6 space-y-6">
        <TableTitle>Sales Table</TableTitle>
        <FilterSales />
        <SalesTable typeBrandModel={{ productTypes, brands, models }} salesEntry={salesPage.sales} page={salesPage.page} totalPages={salesPage.totalPages} totalRows={salesPage.totalRows} />
      </div>
    );
  }
}
