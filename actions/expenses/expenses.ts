'use server';

import { prisma } from "@/lib/prisma";
import { Installment, OtherCost, ShopRent } from "@/prisma/generated/client";
import { revalidatePath } from "next/cache";


export interface AllExpenses {
    rent: ShopRent[];
    installment: Installment[];
    other: OtherCost[];
}


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


export async function getAllCost() {
    try {
        const rent = await prisma.shopRent.findMany();
        const installment = await prisma.installment.findMany();
        const other = await prisma.otherCost.findMany();

        const data = [rent, installment, other];
        return data;
    } catch (error) {
        throw error;
    }
}


export type ExpenseType = 'rent' | 'installment' | 'other';


export async function deleteExpenses(id: string, type: 'rent' | 'installment' | 'other') {
    const res = (bool: any) => {
        revalidatePath('expenses/table');
        return { message: bool ? `Data deleted successfully.` : `Failed to delete data.` };
    }

    const q = {
        where: {
            id
        }
    }

    try {
        if (type == 'rent') {
            const rent = await prisma.shopRent.delete(q);
            return res(rent);
        } else if (type == 'installment') {
            const installment = await prisma.installment.delete(q);
            return res(installment);
        } else {
            const other = await prisma.otherCost.delete(q);
            return res(other);
        }
    } catch (error) {
        throw error;
    }
}


export async function getAllCostByMonth(year: number, month: number): Promise<AllExpenses | undefined> {
    const date = new Date();
    const fullYear = year || date.getFullYear();
    month = month || date.getMonth()

    const filterByMonth = (expenses: ShopRent[], fullYear: number, month: number) => expenses.filter(({ createdAt }) => (
        new Date(createdAt).getFullYear() === fullYear &&
        new Date(createdAt).getMonth() === month - 1
    ));

    try {
        const rent: ShopRent[] = await prisma.shopRent.findMany();
        const installment: Installment[] = await prisma.installment.findMany();
        const other: OtherCost[] = await prisma.otherCost.findMany();

        const data = {
            rent: filterByMonth(rent, fullYear, month),
            installment: filterByMonth(installment, fullYear, month),
            other: filterByMonth(other, fullYear, month)
        }

        return data;
    } catch (error) {
        throw error;
    }
}