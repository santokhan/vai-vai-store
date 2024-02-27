'use server';

import { StockAndroidPOST } from '@/app/api/(store)/stock/entry/post-data-type';
import { prisma } from '@/lib/prisma';


async function addAndroid(data: StockAndroidPOST) {
    try {
        const createdModel = await prisma.stockAndroid.create({
            data: {
                ...data,
                sold: false
            }
        });
        return createdModel;
    } catch (error) {
        console.error('Error getting android phone data:', error);
    } finally {
        await prisma.$disconnect();
    }
}


export async function addStockAndroid({ name, IMEI, modelId, brandId, productTypeId, purchasePrice, sellingPrice, color, ram, rom }: StockAndroidPOST) {
    if (IMEI && modelId && sellingPrice) {
        const existingBrand = await prisma.stockAndroid.findFirst({
            where: { IMEI }
        })
        if (existingBrand) {
            return { message: "Android already exist" };
        } else {
            const createdModel = await addAndroid({ name, IMEI, modelId, brandId, productTypeId, purchasePrice, sellingPrice, color, ram, rom });
            if (createdModel) {
                return { message: `Android phone data created` };
            } else {
                return { message: "Failed to add android" };
            }
        }
    } else {
        return { message: "POST Data is missing" };
    }
}