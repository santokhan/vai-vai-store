export type StockAndroidPOST = {
    name: string;
    IMEI: string;
    modelId: string;
    brandId: string;
    productTypeId: string;
    purchasePrice: number;
    sellingPrice: number;
    color: string;
    ram: string | null;
    rom: string | null;
    dealerId: string | null;
}

export type StockButtonPOST = {
    name: string;
    modelId: string;
    brandId: string;
    productTypeId: string;
    purchasePrice: number;
    sellingPrice: number;
    color: string;
    quantity: number;
}

export type StockAccessoriesPOST = {
    name: string;
    modelId: string;
    brandId: string;
    productTypeId: string;
    purchasePrice: number;
    sellingPrice: number;
    quantity: number;
}

type StockAccessories = {
    name: string;
    modelId: string;
    brandId: string;
    productTypeId: string;
    purchasePrice: number;
    sellingPrice: number;
    quantity: number;
}