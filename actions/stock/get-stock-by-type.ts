import { ProductTypeKeys } from "@/utils/product-type";
import { AnIncBM, getStockAndroidById } from "./android";
import { AccIncBM, getAccessoriesById } from "./accessories/get";
import { BtnIncBM, getStockButtonById } from "./button/get";

export async function getStockByType(type: ProductTypeKeys, id: string): Promise<undefined | AnIncBM | BtnIncBM | AccIncBM> {
    if (type == 'android') {
        const android = await getStockAndroidById(id)
        if (android) return android as AnIncBM;
    }
    if (type == 'button') {
        const button = await getStockButtonById(id);
        if (button) return button as BtnIncBM;
    }
    if (type == 'accessories') {
        const access = await getAccessoriesById(id);
        if (access) return access as AccIncBM;
    }
}