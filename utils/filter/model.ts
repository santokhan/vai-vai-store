import { Model } from "@/prisma/generated/client";

export function modelByBrand(models: Model[], brandId: string): Model[] {
    if (models && brandId) {
        return models.filter(model => model.brandId === brandId);
    }
    return models;
}