'use server';

import { getSalesIndividual } from "@/actions/sales/get";
import { getAccessoriesById } from "@/actions/stock/accessories/get";
import { getStockButtonById } from "@/actions/stock/button/get";
import { getStockSingle } from "@/actions/stock/get";
import Logo from "@/components/logo/logo";
import { PRINT } from "@/components/print";
import PrintWrapper from "@/components/print-wrapper";
import { phoneNumbers } from "@/utils/company-details";

const functionObject = {
    android: getStockSingle,
    button: getStockButtonById,
    accessories: getAccessoriesById,
}

export default async function InvoicePage({ params }: { params: { salesId: string } }) {
    const salesEntry = await getSalesIndividual(params.salesId);
    let totalPrice = 0;

    const SummaryTable = ({ entity, due }: { entity: any[]; due: number }) => {
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
                        {entity.map(async (row: Record<string, any>, i: number) => {
                            totalPrice += row.price * row.quantity;
                            const getFunction = functionObject[row.type as keyof typeof functionObject];
                            const stockData: any = await getFunction(row.stockId);

                            if (!stockData) {
                                return null;
                            }

                            return (
                                <tr key={i}>
                                    <td className="text-gray-800 p-3 text-sm capitalize whitespace-nowrap">
                                        {stockData.brand.brandName} {stockData.model.model} {stockData.IMEI ? '-' + stockData.IMEI : ''}
                                    </td>
                                    <td className="text-gray-800 p-3 text-sm text-end">{row.quantity}</td>
                                    <td className="text-gray-800 p-3 text-sm text-end">{row.price}</td>
                                    <td className="text-gray-800 p-3 text-sm text-end">{totalPrice}</td>
                                </tr>
                            )
                        })}
                        <tr className="text-end">
                            <td></td>
                            <td></td>
                            <td className="py-1.5 px-3 font-semibold text-sm">Total</td>
                            <td className="py-1.5 px-3 font-semibold text-sm">{totalPrice}</td>
                        </tr>
                        <tr className="text-end">
                            <td></td>
                            <td></td>
                            <td className="py-1.5 px-3 font-semibold text-sm">Due</td>
                            <td className="py-1.5 px-3 font-semibold text-sm">{due}</td>
                        </tr>
                        <tr className="text-end">
                            <td></td>
                            <td></td>
                            <td className="py-1.5 px-3 font-semibold text-sm">Discount</td>
                            <td className="py-1.5 px-3 font-semibold text-sm">{salesEntry?.discount || 0}</td>
                        </tr>
                        <tr className="text-end">
                            <td></td>
                            <td></td>
                            <td className="py-1.5 px-3 font-semibold text-sm">Amount Paid</td>
                            <td className="py-1.5 px-3 font-semibold text-sm">{totalPrice - due - (salesEntry?.discount || 0)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

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

    if (salesEntry?.id) {
        const entity: any = salesEntry.entity;
        return (
            <PrintWrapper>
                <main className="space-y-6">
                    <div className="flex flex-col rounded-xl bg-white p-4 sm:p-10">
                        <div className="flex justify-between">
                            <Logo className="text-sky-500" />
                            <div className="text-end">
                                <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">Invoice #</h2>
                                <p className="mt-1 block text-gray-500">{salesEntry.id}</p>
                                <address className="mt-4 not-italic text-gray-800">Boro Masjid Road, Melandaha Bazar</address>
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
                        {Array.isArray(entity) && <SummaryTable entity={entity} due={salesEntry.due} />}
                        <InvoiceFooter />
                    </div>
                </main>
            </PrintWrapper>
        )
    } else {
        return null;
    }
}