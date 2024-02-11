import { SellerData } from "@/context/seller-context"
import { APICustomerData } from "./create-customer"
import { CustomerData } from "@/utils/default-data"

export type Body = {
    stockId: string
    quantity: number
    discount: number
    due: number
}

export type APISalesEntity = {
    stockId: string
    quantity: number
    type: string
}

export type PostSalesData = {
    seller: SellerData
    salesEntity: APISalesEntity[]
    customer: CustomerData
}

// Dummy structure
export type APISalesEntry = {
    discount: number
    due: number
    sellerId: string
    salesEntity: {
        stockId: string
        quantity: number
        type: string
    }[]
    customer: {
        name: string
        email: string
        phone: string
    }
}