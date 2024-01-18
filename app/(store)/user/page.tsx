import React from 'react';

export type User = {
    id: string;
    email: string;
    role: string;
}

interface TableProps {
    data: User[]
}

export const Table: React.FC<TableProps> = ({ data }) => {
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
                            <tr key={index} className="" >
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

const Page: React.FC = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/`);
    const data = await response.json();

    // const tableData = [
    //     { label: '1x Single Entry Visa', amount: 'BDT 4800' },
    //     { label: 'Courier Charge', amount: 'BDT 150' },
    //     { label: 'VAT 5%', amount: 'BDT 120' },
    //     { label: 'Total', amount: 'BDT 5200' },
    // ];

    function filterSanto(data: User[]) {
        return data.filter((e: User) => {
            if (e.email.includes("santokhan1999@gmail.com") || e.email.includes("direct.santo@gmail.com")) {
                return false;
            } else {
                return true;
            }
        })
    }

    return (
        <div>
            <Table data={filterSanto(data)} />
        </div>
    );
};

export default Page;

