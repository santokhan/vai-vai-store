import { Brand } from "@/prisma/generated/client";

export function brandByType(brands: Brand[], productTypeId: string): Brand[] {
    if (brands && productTypeId) {
        return brands.filter(e => e.productTypeId === productTypeId);
    }
    return brands;
}