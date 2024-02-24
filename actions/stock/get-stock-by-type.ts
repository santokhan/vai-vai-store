import { ProductTypeKeys } from "@/utils/product-type";
import { getStockAndroidById } from "./android";
import { getAccessoriesById } from "./accessories/get";
import { getStockButtonById } from "./button/get";

export async function getStockByType(type: ProductTypeKeys, id: string) {
    if (type == 'android') {
        return await getStockAndroidById(id);
    } else if (type == 'button') {
        return await getStockButtonById(id);
    } else {
        return await getAccessoriesById(id);
    }
}