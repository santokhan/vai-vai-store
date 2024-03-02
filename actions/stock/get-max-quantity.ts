import { ProductTypeKeys } from "@/utils/product-type";
import { getStockButtonById } from "./button/get";
import { getAccessoriesById } from "./accessories/get";

export default async function getMaxQuantity(stockId: string, type: ProductTypeKeys) {
    try {
        if (type == 'button') {
            const founded = await getStockButtonById(stockId);
            if (founded) {
                return founded.quantity
            }
        } else if (type == 'accessories') {
            const founded = await getAccessoriesById(stockId);
            if (founded) {
                return founded.quantity
            }
        }
    } catch (error) {
        console.log(error);
    }
}