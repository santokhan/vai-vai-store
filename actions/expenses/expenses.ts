'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitShopRentalForm(state: any, payload: any) {
    const amount = payload.get('amount');
    const comment = payload.get('comment');

    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve('');
            clearTimeout(timeout);
        }, 3000)
    })

    const res = await prisma.shopRent.create({
        data: {
            amount: Number.parseInt(amount),
            comment
        }
    });

    revalidatePath('/expenses/rent');

    return { message: res ? `Data created successfully.` : `Failed to create data.` };
}


export async function submitInstallmentForm(state: any, payload: any) {
    const amount = payload.get('amount');
    const comment = payload.get('comment');

    const res = await prisma.installment.create({
        data: {
            amount: Number.parseInt(amount),
            comment
        }
    })
    return { message: res ? `Data created successfully.` : `Failed to create data.` };
}


export async function submitOtherCostForm(state: any, payload: any) {
    const amount = payload.get('amount');
    const comment = payload.get('comment');

    const res = await prisma.otherCost.create({
        data: {
            amount: Number.parseInt(amount),
            comment
        }
    })
    return { message: res ? `Data created successfully.` : `Failed to create data.` };
}