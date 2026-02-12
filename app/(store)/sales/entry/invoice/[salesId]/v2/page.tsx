import { SalesInclude_C_S, getSalesIndividualIncludeProducts } from "@/actions/sales/get";
import InvoiceFooter from "@/components/InvoiceFooter";
import Logo from "@/components/logo/logo";
import PrintWrapper from "@/components/print-wrapper";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface TableRow {
    brandName: string,
    model: string,
    IMEI: string[],
    total: number,
    quantity: number,
    price: number,
    modelId: string,
    ram: string,
    rom: string,
}

// const entity = {
//     stockId: '6983274ece42cf18d734bd04',
//     quantity: 1,
//     price: 823,
//     type: 'android'
// }
const SummaryTable = async ({ entity, due, discount, ...rest }: SalesInclude_C_S) => {
    if (!Array.isArray(entity)) return null;

    let totalPrice: number = 0;
    const table: TableRow[] = []

    entity?.forEach(({ quantity, price, IMEI, brandName, model, modelId, ram, rom }: any, i: number) => {
        const row: TableRow = {
            brandName: brandName,
            model: model,
            IMEI: [IMEI],
            price: price,
            quantity: quantity || 1,
            total: price * (quantity || 1),
            modelId: modelId,
            ram: ram,
            rom: rom,
        }

        // Duplicate Product
        const dupIndex = table.findIndex((row: any) => row.modelId == modelId && row.ram == ram, row.rom == rom)

        if (table[dupIndex]) {
            table[dupIndex].quantity += row.quantity
            table[dupIndex].total += row.total
            table[dupIndex].IMEI = [...row.IMEI, IMEI]
        } else {
            table.push(row)
        }
        totalPrice += row.total
    })

    const paidAmount: number = totalPrice - due - (discount || 0);

    return (
        <div className="overflow-hidden mt-4">
            <table className="w-full default">
                <thead>
                    <tr className="whitespace-nowrap">
                        <th className="text-gray-700 w-7/12">Brand, Model</th>
                        <th className="text-gray-700 w-1/12">Quantity</th>
                        <th className="text-gray-700 w-2/12">Unit Price</th>
                        <th className="text-gray-700 w-2/12">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map(async (item: any, i: number) => {
                        if (!item) return null;
                        return (
                            <tr key={i}>
                                <td className="">
                                    <div className="capitalize whitespace-nowrap">
                                        <strong>{item?.brandName} {item?.model}</strong> - <strong>{item.ram}</strong>/<strong>{item.rom}</strong>
                                    </div>
                                    <div className="mt-1">{item.IMEI?.join(", ")}</div>
                                </td>
                                <td className="text-end">{item.quantity}</td>
                                <td className="text-end whitespace-nowrap">{item.price}</td>
                                <td className="text-end whitespace-nowrap">{item.total}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr className="text-end font-semibold">
                        <td colSpan={2}></td>
                        <td className="whitespace-nowrap">Total</td>
                        <td className="">{totalPrice}</td>
                    </tr>
                    <tr className="text-end font-semibold">
                        <td colSpan={2}></td>
                        <td className="whitespace-nowrap">Due</td>
                        <td className="">{due}</td>
                    </tr>
                    <tr className="text-end font-semibold">
                        <td colSpan={2}></td>
                        <td className="whitespace-nowrap">Discount</td>
                        <td className="">{discount || 0}</td>
                    </tr>
                    <tr className="text-end font-semibold">
                        <td colSpan={2}></td>
                        <td className="whitespace-nowrap">Amount Paid</td>
                        <td className="">{paidAmount}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

interface Props {
    params: { salesId: string }
}

export default async function InvoicePage({ params }: Props) {
    const salesId = params.salesId
    const salesEntry = await getSalesIndividualIncludeProducts(salesId);

    if (!salesEntry?.id) { return true; }

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
                        <div className="mt-6 grid gap-3 grid-cols-2">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Bill to: {salesEntry.customer.name || salesEntry.customer.phone}
                                </h3>
                            </div>
                            <div className="space-y-2 sm:text-end">
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-2">
                                    <dl className="grid gap-x-3 sm:grid-cols-5">
                                        <dt className="col-span-3 font-semibold text-gray-800">Date:</dt>
                                        <dd className="col-span-2 text-gray-500">{new Date().toDateString()}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <SummaryTable {...salesEntry} />
                        <InvoiceFooter salesId={salesId} />
                    </div>
                </main>
            </PrintWrapper>
        </>
    )
}