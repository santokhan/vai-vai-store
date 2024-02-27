'use server';

import { addCustomer } from '@/app/api/(store)/sales/entry/create-customer';
import subtractStockAccessories from '@/app/api/(store)/sales/entry/sale-accessories';
import subtractStockAndroid from '@/app/api/(store)/sales/entry/sale-android';
import subtractStockButton from '@/app/api/(store)/sales/entry/sale-button';
import { APISalesEntity, APISalesEntry } from '@/app/api/(store)/sales/entry/type';
import { prisma } from '@/lib/prisma';


export interface AddSalesProps {
    customerId: string
    due: number
    discount: number
    sellerId: string
    entity: APISalesEntity[]
}


async function addSales(data: AddSalesProps) {
    try {
        return await prisma.salesEntry.create({
            data: {
                ...data,
                dueDate: data.due ? new Date() : null
            }
        });
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        await prisma.$disconnect();
    }
}


export async function AddSalesEntry({ customer, salesEntity, seller }: APISalesEntry) {
    let createdCustomerId: string | undefined;
    const createdCustomer = await addCustomer({ ...customer });
    if (createdCustomer) {
        createdCustomerId = createdCustomer.id
        if (salesEntity) {
            const androidIdList = [];
            const buttonIdList = [];
            const accessoriesIdList = [];

            salesEntity.forEach(async (salesRow) => {
                // Process SalesRow data and save it to salesEntry
                // Send SalesRow data to sale-android
                // Send SalesRow data to sale-button
                // Send SalesRow data to sale-accessories
                const { stockId, type, quantity } = salesRow;
                switch (type) {
                    case 'android':
                        androidIdList.push(stockId);
                        const updateStockAndroid = await subtractStockAndroid(stockId);
                        if (!updateStockAndroid) {
                            return { message: 'Failed to update stockAndroid.' };
                        }
                        break;

                    case 'button':
                        buttonIdList.push(stockId);
                        const updateStockButton = await subtractStockButton(stockId, quantity);
                        if (!updateStockButton) {
                            return { message: 'Failed to update stockButton.' };
                        }
                        break;

                    case 'accessories':
                        accessoriesIdList.push(stockId);
                        const updateStockAccessories = await subtractStockAccessories(stockId, quantity);
                        if (!updateStockAccessories) {
                            return { message: 'Failed to update stockAccessories.' };
                        }
                        break;

                    default:
                        break;
                }
            })
            const createdSales = await addSales({
                discount: seller.discount,
                due: seller.due,
                customerId: createdCustomerId,
                sellerId: seller.sellerId,
                entity: salesEntity
            });
            if (createdSales) {
                return { id: createdSales.id };
            } else {
                return { message: 'Failed to create sales.' };
            }
        } else {
            return { message: 'POST salesEntity to create new sales' };
        }
    } else {
        return { message: 'Falied to create customer' };
    }
}