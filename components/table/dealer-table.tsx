import { Dealer } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';

interface DealerTableProps {
  types: Dealer[]; // Make sure this matches your Dealer type
}

export function DealerTable({ types }: DealerTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg max-w-full">
      <Table>
        <Table.Head>
          <Table.HeadCell>Dealer Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Phone Number</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {types.map((dealer: Dealer) => (
            <Table.Row className="bg-white" key={dealer.id}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 capitalize">
                {dealer.name}
              </Table.Cell>
              <Table.Cell>{dealer.description || '-'}</Table.Cell>
              <Table.Cell>{dealer.phoneNumber || '-'}</Table.Cell>
              <Table.Cell>{dealer.location || '-'}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
