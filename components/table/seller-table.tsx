'use client';

import { Seller } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';

export function SellerTable({ types }: { types: Seller[] }) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell>Seller</Table.HeadCell>
                    <Table.HeadCell>Actions
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        types.map((type: Seller) => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={type.id}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white capitalize">
                                    {type.name}
                                </Table.Cell>
                                {/* <Table.Cell>
                                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            Edit
                                        </a>
                                    </Table.Cell> */}
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
