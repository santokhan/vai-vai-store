'use client';

import { ProductType } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';
import { PRINT } from '../print';

export function TypeTable({ types }: { types: ProductType[] }) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell>Product Type</Table.HeadCell>
                    <Table.HeadCell>Actions
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        types.map((type: ProductType) => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={type.id}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white capitalize">
                                    {type.type}
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
