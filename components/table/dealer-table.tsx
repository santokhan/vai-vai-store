'use client';

import { Seller } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';

export function DealerTable({ types }: { types: Seller[] }) {
    return (
        <div className="overflow-x-auto bg-white rounded-lg max-w-xl">
            <Table>
                <Table.Head>
                    <Table.HeadCell>Dealers</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        types.map((type: Seller) => (
                            <Table.Row className="bg-white" key={type.id}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 capitalize">
                                    {type.name}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
