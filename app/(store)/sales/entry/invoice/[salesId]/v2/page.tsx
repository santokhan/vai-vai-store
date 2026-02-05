'use server';

import { SalesInclude_C_S, getSalesIndividual } from "@/actions/sales/get";
import { getAccessoriesById } from "@/actions/stock/accessories/get";
import { getStockAndroidById } from "@/actions/stock/android";
import { getStockButtonById } from "@/actions/stock/button/get";
import Logo from "@/components/logo/logo";
import PrintWrapper from "@/components/print-wrapper";
import { StockAccessories } from "@/prisma/generated/client";
import { phoneNumbers } from "@/utils/company-details";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

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
        <p className="mt-5 text-sm text-gray-500">©{new Date().getFullYear()} ভাই ভাই টেলিকম.</p>

        <div className="mt-20">
            <div className="ml-auto w-60 text-center">
                <p className='border-t-2 text-sm'>Signature</p>
            </div>
        </div>
    </>
)

const SummaryTable = async ({ entity, due, discount }: SalesInclude_C_S) => {
    let totalPrice: number = 0;
    if (Array.isArray(entity)) {
        totalPrice = entity.reduce((prev: number, crnt: any) => {
            if (crnt.price) {
                return prev + crnt.price * (crnt.quantity || 1);
            }
            return prev;
        }, 0);
    }

    const paidAmount: number = totalPrice - due - (discount || 0);

    if (!Array.isArray(entity)) return null;

    const grouped: Record<string, any> = {}
    const entries: StockAccessories[] = []
    await Promise.all(entity.map(async ({ type, quantity, price, stockId }: any, i: number) => {
        const getFunction = functionObject[type as keyof typeof functionObject];
        const stockData: any = await getFunction(stockId); // NOTE: removed async await for simplicity

        if (stockData) { entries.push(stockData) }

        const exisiting = grouped[stockData.modelId]
        if (exisiting && stockData.ram == exisiting.ram && stockData.rom == exisiting.rom) {
            exisiting.quantity += quantity || 1
            exisiting.price = price
            exisiting.IMEI = exisiting.IMEI?.split(',').concat(stockData.IMEI).join(', ')
        } else {
            stockData.quantity = stockData.quantity || 1
            stockData.price = price
            grouped[stockData.modelId] = stockData
        }
        return stockData;
    }))

    return (
        <div className="rounded-lg overflow-hidden mt-6">
            <table className="w-full">
                <thead className="bg-gray-100 text-start text-sm font-semibold uppercase">
                    <tr className="whitespace-nowrap">
                        <th className="p-2 text-gray-700 w-2/12">Brand & Model</th>
                        <th className="p-2 text-gray-700 w-2/12">IMEI</th>
                        <th className="p-2 text-gray-700 w-1/12">Quantity</th>
                        <th className="p-2 text-gray-700 w-1/12">RAM/ROM</th>
                        <th className="p-2 text-gray-700 w-1/12">Price</th>
                        <th className="p-2 text-gray-700 w-1/12">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(grouped).map(async (stockData: any, i: number) => {
                        if (!stockData) return null;

                        const rowTotal = stockData.quantity * stockData.price || 0;

                        return (
                            <tr key={i}>
                                <td className="default capitalize whitespace-nowrap">
                                    {stockData.brand?.brandName} {stockData.model?.model}
                                </td>
                                <td className="default whitespace-nowrap">{stockData.IMEI}</td>
                                <td className="default text-end">{stockData.quantity}</td>
                                <td className="default text-end whitespace-nowrap">
                                    {stockData.ram}GB / {stockData.rom}GB
                                </td>
                                <td className="default text-end whitespace-nowrap">{stockData.price}</td>
                                <td className="default text-end whitespace-nowrap">{rowTotal}</td>
                            </tr>
                        )
                    })}
                    <tr className="text-end">
                        <td colSpan={4}></td>
                        <td className="default whitespace-nowrap">Total</td>
                        <td className="default">{totalPrice}</td>
                    </tr>
                    <tr className="text-end">
                        <td colSpan={4}></td>
                        <td className="default whitespace-nowrap">Due</td>
                        <td className="default">{due}</td>
                    </tr>
                    <tr className="text-end">
                        <td colSpan={4}></td>
                        <td className="default whitespace-nowrap">Discount</td>
                        <td className="default">{discount || 0}</td>
                    </tr>
                    <tr className="text-end">
                        <td colSpan={4}></td>
                        <td className="default whitespace-nowrap">Amount Paid</td>
                        <td className="default">{paidAmount}</td>
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
        <>
            <div className="flex">
                <Link href={`/sales/entry/invoice/${salesEntry.id}`}
                    className={twMerge("px-4 py-2 rounded-lg bg-white")}
                >Invoice V1</Link>
                <Link href={`/sales/entry/invoice/${salesEntry.id}/v2`}
                    className={twMerge("px-4 py-2 rounded-lg", "bg-blue-500 text-white")}
                >Invoice V2</Link>
            </div>
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
        </>
    )
}