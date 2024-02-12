import { SellerData } from "@/context/seller-context"
import { APICustomerData } from "./create-customer"
import { ProductTypeKeys } from "@/utils/product-type"

export type APISalesEntity = {
    stockId: string
    quantity: number
    type: ProductTypeKeys
    price: number
}

export type APISalesEntry = {
    salesEntity: APISalesEntity[]
    seller: SellerData
    customer: APICustomerData
}