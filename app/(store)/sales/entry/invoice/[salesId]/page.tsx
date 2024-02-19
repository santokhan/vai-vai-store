'use server';
import { getSalesIndividual } from "@/actions/sales/get";
import { getStockSingle } from "@/actions/stock/get";
import Logo from "@/components/logo/logo";
import PrintWrapper from "@/components/print-wrapper";

const getStockData = async (stockId: string) => {
    return await getStockSingle(stockId)
}

export default async function InvoicePage({ params }: { params: { salesId: string } }) {
    const salesEntry = await getSalesIndividual(params.salesId);
    let totalPrice = 0;

    const SummaryTable = ({ entity, due }: { entity: any[]; due: number }) => {
        return (
            <>
                <div className="mt-6">
                    <div className="rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-start text-sm font-semibold uppercase p-3 text-gray-700">Type</th>
                                    <th className="text-start text-sm font-semibold uppercase p-3 text-gray-700">Brand</th>
                                    <th className="text-start text-sm font-semibold uppercase p-3 text-gray-700">Model</th>
                                    <th className="text-start text-sm font-semibold uppercase p-3 text-gray-700">Quantity</th>
                                    <th className="text-start text-sm font-semibold uppercase p-3 text-gray-700">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entity.map(async (row: any, i: number) => {
                                    totalPrice += row.price;
                                    const stockData = await getStockData(row.stockId);
                                    if (stockData) {
                                        return (
                                            <tr key={i}>
                                                <td className="text-gray-800 p-3 text-sm capitalize">{row.type}</td>
                                                <td className="text-gray-800 p-3 text-sm capitalize">{stockData?.brand.brandName}</td>
                                                <td className="text-gray-800 p-3 text-sm capitalize">{stockData?.model.model}</td>
                                                <td className="text-gray-800 p-3 text-sm">{row.quantity}</td>
                                                <td className="text-gray-800 p-3 text-sm">{row.price}</td>
                                            </tr>
                                        )
                                    } else { return null; }

                                })}
                                <tr>
                                    <td className="py-2 px-3 font-semibold text-sm"></td>
                                    <td className="py-2 px-3 font-semibold text-sm"></td>
                                    <td className="py-2 px-3 font-semibold text-sm"></td>
                                    <td className="py-2 px-3 font-semibold text-sm"></td>
                                    <td className="py-2 px-3 font-semibold text-sm"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="py-2 px-3 font-semibold text-sm">Total</td>
                                    <td className="py-2 px-3 font-semibold text-sm">{totalPrice}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="py-2 px-3 font-semibold text-sm">Due</td>
                                    <td className="py-2 px-3 font-semibold text-sm">{due}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="py-2 px-3 font-semibold text-sm">Discount</td>
                                    <td className="py-2 px-3 font-semibold text-sm">{salesEntry?.discount || 0}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="py-2 px-3 font-semibold text-sm">Amount Paid</td>
                                    <td className="py-2 px-3 font-semibold text-sm">{totalPrice - due - (salesEntry?.discount || 0)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }

    const InvoiceFooter = () => (
        <>
            <div className="mt-8 sm:mt-12">
                <h4 className="text-lg font-semibold text-gray-800">Thank you!</h4>
                <p className="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
                <div className="mt-2">
                    <p className="block text-sm font-medium text-gray-800">
                        Phone: 01744 683 125, 01922 349 151
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

    if (salesEntry?.id && salesEntry.entity) {
        const entity: any = salesEntry.entity;
        return (
            <PrintWrapper>
                {/* <PRINT data={salesEntry} /> */}
                <main className="space-y-6">
                    {/* <pre>{JSON.stringify(salesEntry, null, 2)}</pre> */}
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
                                <h3 className="text-lg font-semibold text-gray-800">Bill to:</h3>
                                <h3 className="text-lg font-semibold text-gray-800">{salesEntry.customer.name || salesEntry.customer.phone}</h3>
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
                        {entity.length > 0 && <SummaryTable entity={entity} due={salesEntry.due} />}
                        <InvoiceFooter />
                    </div>
                </main>
            </PrintWrapper>
        )
    } else {
        return null;
    }
}