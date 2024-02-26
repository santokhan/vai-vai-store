'use server';

import { redirect } from 'next/navigation';

/**
 * 
 * @param id salesEntry id
 */
export default async function redirectToInvoice(id: string) {
    redirect(`/sales/entry/invoice/${id}`);
}