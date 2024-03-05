'use server';

import { SalesInclude_C_S, getSalesIndividual } from "@/actions/sales/get";
import { getAccessoriesById } from "@/actions/stock/accessories/get";
import { getStockAndroidById } from "@/actions/stock/android";
import { getStockButtonById } from "@/actions/stock/button/get";
import Logo from "@/components/logo/logo";
import PrintWrapper from "@/components/print-wrapper";
import { phoneNumbers } from "@/utils/company-details";

const InvoiceFooter = () => (
    <>
        <div className="mt-8 sm:mt-12">
            <h4 className="text-lg font-semibold text-gray-800">Thank you!</h4>
            <p className="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
            <div className="mt-2">
                <p className="block text-sm font-medium text-gray-800">
                    Phone: {phoneNumbers.join(", ")}
                </p>
            </div>
        </div>
        <p className="mt-5 text-sm text-gray-500">©2022 ভাই ভাই টেলিকম.</p>

        <div className="mt-20">
            <div className="ml-auto w-60 text-center">
                <p className='border-t-2 text-sm'>Signature</p>
            </div>
        </div>
    </>
)

const SummaryTable = ({ entity, due, discount }: SalesInclude_C_S) => {
    // calculate total price
    let totalPrice: number = 0;
    if (Array.isArray(entity)) {
        totalPrice = entity.reduce((prev: number, crnt: any) => {
            if (crnt.price) {
                if (crnt.quantity) {
                    return prev += crnt.price * crnt.quantity;
                } else {
                    return prev += crnt.price * 1;
                }
            } else {
                return prev;
            }
        }, 0);
    }

    // calculate total paid amount - due - discount
    const paidAmount: number = totalPrice - due - (discount || 0);

    return (
        <div className="rounded-lg overflow-hidden mt-6">
            <table className="w-full">
                <thead className="bg-gray-100 text-start text-sm font-semibold uppercase">
                    <tr className="whitespace-nowrap">
                        <th className="p-2 text-gray-700 w-5/12">Brand & Model</th>
                        <th className="p-2 text-gray-700 w-2/12">Quantity</th>
                        <th className="p-2 text-gray-700 w-2/12">Price</th>
                        <th className="p-2 text-gray-700 w-3/12">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(entity) && entity.map(async ({ type, quantity, price, stockId }: any, i: number) => {
                        const getFunction = functionObject[type as keyof typeof functionObject];
                        const stockData: any = await getFunction(stockId);
                        if (!stockData) {
                            return null;
                        }

                        const rowTotal = quantity * price || 0;

                        return (
                            stockData &&
                            <tr key={i}>
                                <td className="text-gray-800 p-3 text-sm capitalize whitespace-nowrap">
                                    {stockData.brand.brandName} {stockData.model.model} {stockData.IMEI ? '-' + stockData.IMEI : ''}
                                </td>
                                <td className="text-gray-800 p-3 text-sm text-end">{quantity}</td>
                                <td className="text-gray-800 p-3 text-sm text-end">{price}</td>
                                <td className="text-gray-800 p-3 text-sm text-end">{rowTotal}</td>
                            </tr>
                        )
                    })}
                    <tr className="text-end">
                        <td></td>
                        <td></td>
                        <td className="py-1.5 px-3 font-semibold text-sm whitespace-nowrap">Total</td>
                        <td className="py-1.5 px-3 font-semibold text-sm">{totalPrice}</td>
                    </tr>
                    <tr className="text-end">
                        <td></td>
                        <td></td>
                        <td className="py-1.5 px-3 font-semibold text-sm whitespace-nowrap">Due</td>
                        <td className="py-1.5 px-3 font-semibold text-sm">{due}</td>
                    </tr>
                    <tr className="text-end">
                        <td></td>
                        <td></td>
                        <td className="py-1.5 px-3 font-semibold text-sm whitespace-nowrap">Discount</td>
                        <td className="py-1.5 px-3 font-semibold text-sm">{discount || 0}</td>
                    </tr>
                    <tr className="text-end">
                        <td></td>
                        <td></td>
                        <td className="py-1.5 px-3 font-semibold text-sm whitespace-nowrap">Amount Paid</td>
                        <td className="py-1.5 px-3 font-semibold text-sm">{paidAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const functionObject = {
    android: getStockAndroidById,
    button: getStockButtonById,
    accessories: getAccessoriesById,
}

export default async function InvoicePage({ params }: { params: { salesId: string } }) {
    const salesEntry = await getSalesIndividual(params.salesId);

    if (!salesEntry?.id) {
        return true;
    }

    return (
        <PrintWrapper>
            <main className="space-y-6">
                <div className="flex flex-col rounded-xl bg-white p-4 sm:p-10">
                    <div className="flex justify-between">
                        <Logo className="text-sky-500" />
                        <div className="text-end">
                            <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">Invoice #</h2>
                            <p className="mt-1 block text-gray-500">{salesEntry.id}</p>
                            <address className="mt-4 not-italic text-gray-800 whitespace-nowrap">Boro Masjid Road, Melandaha Bazar</address>
                        </div>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Bill to: {salesEntry.customer.name || salesEntry.customer.phone}
                            </h3>
                        </div>
                        <div className="space-y-2 sm:text-end">
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-2">
                                <dl className="grid gap-x-3 sm:grid-cols-5">
                                    <dt className="col-span-3 font-semibold text-gray-800">Invoice date:</dt>
                                    <dd className="col-span-2 text-gray-500">{new Date().toDateString()}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <SummaryTable {...salesEntry} />
                    <InvoiceFooter />
                </div>
            </main>
        </PrintWrapper>
    )
}