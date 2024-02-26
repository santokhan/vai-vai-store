'use client';

import { removeUser } from "@/actions/user/role";
import Actions, { ActionDelete } from "@/components/table/action";
import { Table } from "flowbite-react";
import { toast } from "react-toastify";

export type User = {
    id: string;
    email: string;
    role: string;
}

interface TableProps {
    data: User[]
}

export const UserTable: React.FC<TableProps> = ({ data }) => {
    if (!data.length) {
        return null;
    }

    return (
        <div className="max-w-3xl rounded-xl bg-white shadow">
            <h3 className="p-4 text-lg font-semibold">Users</h3>
            <div className="relative w-full overflow-x-auto px-4">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {data.map(({ id, email, role }, index) => (
                            <Table.Row key={index}>
                                <Table.Cell className="">{email}</Table.Cell>
                                <Table.Cell className="whitespace-nowrap">{role}</Table.Cell>
                                <Table.Cell className="">
                                    <Actions>
                                        <ActionDelete handleClick={async () => {
                                            const res = await removeUser(id);
                                            res && toast(res?.message);
                                        }} />
                                    </Actions>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};