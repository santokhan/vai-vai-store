import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import FilterSales from "@/block/form/sales/sales-filter";
import SalesTable from "@/block/sales/table/main";
import { TableTitle } from "@/components/table/table-header";

export const dynamic = "force-dynamic";

export default async function SalesTablePage() {
  const productTypes = await getType();
  const brands = await getBrand();
  const models = await getModel();

  if (productTypes && brands && models) {
    return (
      <div className="rounded-xl bg-white w-full p-6 space-y-6">
        <TableTitle>Sales Table</TableTitle>
        <FilterSales />
        <SalesTable typeBrandModel={{ productTypes, brands, models }} />
      </div>
    );
  }
}
