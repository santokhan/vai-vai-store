import { Brand, InStock, Model, ProductType } from "@/prisma/generated/client";

export type CustomerData = {
    name: string,
    email: string,
    phone: string,
    message: string,
}

export const defaultType = [
    'android',
    'button',
    'accessories',
];

export const defaultBrands = [
    'samsung',
    'oppo',
    'vivo',
    'xiaomi',
    'redmi',
    'realme',
    'apple',
    'nokia',
    'google',
    'huawei',
    'oneplus',
    'poco',
    'sony',
    'tecno',
    'walton',
    'zte',
];

export const commonPhoneColors = [
    'black',
    'white',
    'silver',
    'gold',
    'blue',
    'red',
    'green',
    'purple',
    'orange',
    'yellow',
    'copper',
    'pink',
    'aqua'
];

export type StockIncludes = InStock & {
    productType?: ProductType;
    brand?: Brand;
    model?: Model;
};

export const dummyProductData: StockIncludes[] = [
    {
        "id": "65ae51a9f4f577df43eab3e5",
        "name": "Dummy Product 1",
        "IMEI": "545615615115615",
        "modelId": "65a9abdf150c3b84a92459f1",
        "brandId": "65a91d6763b1f46b14f99d1f",
        "productTypeId": "65a8c556cd9eb4535ebeb167",
        "purchasePrice": 26,
        "price": 27,
        "sold": false,
        "color": "gold",
        "ram": "4",
        "rom": "32",
        "createdAt": new Date("2024-01-22T11:29:45.753Z"),
        "productType": {
            "id": "65a8c556cd9eb4535ebeb167",
            "type": "android",
            "createdAt": null
        },
        "brand": {
            "id": "65a91d6763b1f46b14f99d1f",
            "brandName": "samsung",
            "productTypeId": "65a8c556cd9eb4535ebeb167",
            "createdAt": null
        },
        "model": {
            "id": "65a9abdf150c3b84a92459f1",
            "model": "galaxy j5",
            "brandId": "65a91d6763b1f46b14f99d1f",
            "createdAt": null
        }
    },
];

export type SearchProductCardType = InStock & { model: Model };

export const dummyStockData: SearchProductCardType = {
    "id": "65aeb95e8f2407fbbc85ff3e",
    "name": "Rifat Santo",
    "IMEI": "545615615115615",
    "modelId": "65a9abe7150c3b84a92459f4",
    "brandId": "65a91d6763b1f46b14f99d1f",
    "productTypeId": "65a8c556cd9eb4535ebeb167",
    "purchasePrice": 19,
    "price": 39,
    "sold": false,
    "color": "white",
    "ram": "4",
    "rom": "64",
    "createdAt": new Date("2024-01-22T18:52:14.381Z"),
    "model": {
        "id": "65a9abe7150c3b84a92459f4",
        "model": "galaxy j7",
        "brandId": "65a91d6763b1f46b14f99d1f",
        "createdAt": null
    }
}

export const initialCustomer: CustomerData = {
    name: '',
    email: '',
    phone: '',
    message: ''
}

export const InitialSalesEntry = {
    instockId: "",
    IMEI: "",
    price: 0,
    discount: 0,
    sellerId: "",
    due: 0
}