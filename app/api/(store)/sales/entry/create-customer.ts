import { prisma } from "@/lib/prisma";
import { Customer } from "@/prisma/generated/client";

export async function addCustomer({ name, email, phone }: Customer) {
    try {
        const existingCustomer = await prisma.customer.findFirst({
            where: {
                phone: phone
            }
        })

        if (existingCustomer) {
            return existingCustomer;
        } else {
            const createdModel = await prisma.customer.create({
                data: {
                    name,
                    email,
                    phone
                }
            });
            return createdModel;
        }
    } catch (error) {
        console.error('Error creating model:', error);
    } finally {
        // Close the Prisma Client connection
        await prisma.$disconnect();
    }
}