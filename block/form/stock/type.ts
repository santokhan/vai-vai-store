import { Brand, Dealer, Model, ProductType } from "@/prisma/generated/client";

export interface ServerProps {
    productType: ProductType[]
    brand: Brand[]
    model: Model[]
    dealers?: Dealer[]
}