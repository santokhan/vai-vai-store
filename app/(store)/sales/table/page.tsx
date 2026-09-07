"use server";

import { getBrand } from "@/actions/brand";
import { getModel } from "@/actions/model";
import { getType } from "@/actions/product-type";
import { SalesInclude_C_S, getSalesMany } from "@/actions/sales/get";
import SalesTable from "@/block/sales/table/main";

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export default async function SalesTablePage(props: Props) {
  const searchParams = await props.searchParams;
  const imei = searchParams.imei;
  const salesEntry: SalesInclude_C_S[] | undefined = await getSalesMany({
    imei,
  });
  const productTypes = await getType();
  const brands = await getBrand();
  const models = await getModel();

  if (salesEntry && salesEntry.length > 0 && productTypes && brands && models) {
    return (
      <SalesTable
        salesEntry={salesEntry}
        typeBrandModel={{ productTypes, brands, models }}
      />
    );
  } else {
    return null;
  }
}
