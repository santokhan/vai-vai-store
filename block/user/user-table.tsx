export type User = {
    id: string;
    email: string;
    role: string;
}

interface TableProps {
    data: User[]
}

export const UserTable: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="max-w-md rounded-xl bg-white shadow">
            <h3 className="border-b p-4 text-lg font-semibold">Users</h3>
            <div className="relative w-full overflow-x-auto px-4 py-6">
                <table className="w-full text-left text-sm font-medium text-gray-900 rtl:text-right">
                    <thead>
                        <tr>
                            <th className='px-2 py-2'>Email</th>
                            <th className='px-2 py-2'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="">
                                <td className="whitespace-nowrap px-2 py-2">{item.email}</td>
                                <td className="px-2 py-2">{item.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};