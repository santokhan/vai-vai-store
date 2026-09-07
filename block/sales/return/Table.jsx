import { getReturns } from "@/actions/sales/return/return"

async function SalesReturnTable() {
    const returns = await getReturns({
        skip: 0,
        take: 10
    })

    return (
        <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-blue-50 text-blue-700 uppercase text-xs tracking-wide">
                    <tr>
                        <th className="px-6 py-4">Return ID</th>
                        <th className="px-6 py-4">Stock ID</th>
                        <th className="px-6 py-4">Product Type</th>
                        <th className="px-6 py-4">Created At</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                    {returns?.map((item) => (
                        <tr
                            key={item?.id}
                            className="hover:bg-blue-50/40 transition-colors"
                        >
                            <td className="px-6 py-4 font-medium text-gray-800">
                                {item?.id}
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                {item?.stockId}
                            </td>

                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    {item?.productType?.type}
                                </span>
                            </td>

                            <td className="px-6 py-4 text-gray-500">
                                {item?.createdAt
                                    ? new Date(item.createdAt).toLocaleDateString()
                                    : "-"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {returns?.length === 0 && (
                <div className="py-10 text-center text-gray-500 text-sm">
                    No return records found.
                </div>
            )}
        </div>
    )
}

export default SalesReturnTable
