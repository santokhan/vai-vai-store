import { SalesInclude_C_S, getSalesIndividualIncludeProducts } from "@/actions/sales/get";
import Logo from "@/components/logo/logo";
import PrintWrapper from "@/components/print-wrapper";
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

    entity?.forEach(({ quantity, price, IMEI, brandName, model, modelId, ram, rom }: any) => {
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

        const duplicate = table.find((row: any) => row.modelId == modelId && row.ram == ram, row.rom == rom)

        if (duplicate) {
            row.quantity += quantity || 1
            row.total += row.quantity * row.price
            row.IMEI = [...row.IMEI, IMEI]
        } else {
            table.push(row)
        }
    })

    const paidAmount: number = totalPrice - due - (discount || 0);

    return (
        <div className="rounded-lg overflow-hidden mt-6">
            <table className="w-full">
                <thead className="bg-gray-100 text-start text-sm font-semibold uppercase">
                    <tr className="whitespace-nowrap">
                        <th className="p-2 text-gray-700 w-2/12">Brand, Model</th>
                        <th className="p-2 text-gray-700 w-1/12">Quantity</th>
                        <th className="p-2 text-gray-700 w-1/12">Price</th>
                        <th className="p-2 text-gray-700 w-1/12">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map(async (item: any, i: number) => {
                        return (
                            item &&
                            <tr key={i}>
                                <td className="default">
                                    <div className="capitalize whitespace-nowrap">
                                        <strong>{item?.brandName} {item?.model}</strong> - {item.ram}/{item.rom}
                                    </div>
                                    <div className="mt-2">{item.IMEI}</div>
                                </td>
                                <td className="default text-end">{item.quantity}</td>
                                <td className="default text-end whitespace-nowrap">{item.price}</td>
                                <td className="default text-end whitespace-nowrap">{item.total}</td>
                            </tr>
                        )
                    })}
                    <tr className="text-end font-semibold">
                        <td colSpan={2}></td>
                        <td className="default whitespace-nowrap">Total</td>
                        <td className="default">{totalPrice}</td>
                    </tr>
                    <tr className="text-end font-semibold">
                        <td colSpan={2}></td>
                        <td className="default whitespace-nowrap">Due</td>
                        <td className="default">{due}</td>
                    </tr>
                    <tr className="text-end font-semibold">
                        <td colSpan={2}></td>
                        <td className="default whitespace-nowrap">Discount</td>
                        <td className="default">{discount || 0}</td>
                    </tr>
                    <tr className="text-end font-semibold">
                        <td colSpan={2}></td>
                        <td className="default whitespace-nowrap">Amount Paid</td>
                        <td className="default">{paidAmount}</td>
                    </tr>
                </tbody>
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