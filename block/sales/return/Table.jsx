'use server'

import { getReturns } from "@/actions/sales/return/return"
import Link from "next/link"

async function SalesReturnTable() {
    const returns = await getReturns({ skip: 0, take: 10 })

    return (
        <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-blue-50 text-blue-700 uppercase text-xs tracking-wide">
                    <tr>
                        <th className="px-6 py-4">Stock ID</th>
                        <th className="px-6 py-4">Product Type</th>
                        <th className="px-6 py-4">Product</th>
                        <th className="px-6 py-4">Details</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Created At</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {returns?.map((item) => (
                        <tr key={item?.id} className="hover:bg-blue-50/40 transition-colors">
                            <td className="px-6 py-4 text-gray-600">
                                <Link
                                    className="text-blue-700 hover:underline"
                                    href={`/sales/table?stockId=${encodeURIComponent(item.stockId)}`}
                                >
                                    {item.stockId}
                                </Link>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    {item?.productType?.type}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                                {item?.stock ? `${item.stock.brand.brandName} ${item.stock.model.model}` : "Product unavailable"}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                                {item?.stock ? (
                                    <div>
                                        <div>{item.stock.name}</div>
                                        {"IMEI" in item.stock && <div className="text-xs text-gray-500">IMEI: {item.stock.IMEI}</div>}
                                        {"color" in item.stock && item.stock.color && <div className="text-xs text-gray-500">Color: {item.stock.color}</div>}
                                        {"ram" in item.stock && (item.stock.ram || item.stock.rom) && <div className="text-xs text-gray-500">RAM/ROM: {item.stock.ram || "-"}/{item.stock.rom || "-"}</div>}
                                    </div>
                                ) : "-"}
                            </td>
                            <td className="px-6 py-4 text-gray-600">{item?.stock ? `৳${item.stock.sellingPrice.toLocaleString()}` : "-"}</td>
                            <td className="px-6 py-4 text-gray-500">
                                {item?.createdAt ? new Date(item.createdAt).toLocaleDateString() : "-"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {returns?.length === 0 && <div className="py-10 text-center text-gray-500 text-sm">No return records found.</div>}
        </div>
    )
}

export default SalesReturnTable
