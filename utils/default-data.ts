import { APICustomerData } from "@/app/api/(store)/sales/entry/create-customer";
export { commonPhoneColors } from "./pre-defined-form-data";

export const defaultType = [
    'android',
    'button',
    'accessories',
];

export const initialCustomer: APICustomerData = {
    name: '',
    email: '',
    phone: '',
}

export const InitialSalesEntry = {
    instockId: "",
    IMEI: "",
    price: 0,
    discount: 0,
    sellerId: "",
    due: 0
}