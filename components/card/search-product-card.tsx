import { TableTitle } from "../table/table-header";

export const FoundedProductTable: React.FC<{ obj: Record<string, any> }> = ({ obj }) => {
    const list: string[][] = Object.entries(obj).filter(([key, value]) => !!value);

    return (
        <div className="overflow-x-auto space-y-2">
            <TableTitle>Specifications</TableTitle>
            <table className="text-sm">
                <thead>
                    <tr>
                        <th className='px-3 py-2 text-start bg-gray-100 min-w-40 rounded-l-lg'>Key</th>
                        <th className='px-3 py-2 text-start bg-gray-100 min-w-40 rounded-r-lg'>Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {
                        list.map(([key, value], index) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap px-3 py-2 capitalize">{key}</td>
                                <td className="whitespace-nowrap px-3 py-2 capitalize">{value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};