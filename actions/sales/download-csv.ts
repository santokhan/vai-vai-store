import { getStockByType } from "../stock/get-stock-by-type";
import { getSalesMany } from "./get";
import { ProductTypeKeys } from "@/utils/product-type";

export default async function downloadSalesCSV() {
    let sales: any[] | undefined = await getSalesMany();
    if (!sales) { return null; }

    sales = sales.map(e => {
        const list = JSON.parse(JSON.stringify(e.entity));
        if (Array.isArray(list)) {
            e.entity = list as any[];
        } else {
            e.entity = [] as any[];
        }
        return e;
    });

    return await Promise.all(
        sales.map(async (sale) => {
            return {
                ...sale,
                entity: await Promise.all(
                    sale.entity.map(async (product: any) => {
                        const stock = await getStockByType(product.type as ProductTypeKeys, product.stockId as string);
                        if (!stock) {
                            return product;
                        }
                        return {
                            ...stock,
                            ...product
                        };
                    })
                )
            };
        })
    )
}