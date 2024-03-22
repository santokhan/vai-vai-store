'use client';

import { SalesInclude_C_S } from "@/actions/sales/get";
import { PRINT } from "@/components/print";
import { TableTitle } from "@/components/table/table-header"
import { Table } from "flowbite-react"
import { ProductDetails } from "../sales/table/product-details-cols";
import StreamIcon from "@/components/icons/stream";

export const ASalesToday = ({ data }: { data: SalesInclude_C_S[] }) => {
    return (
        <div className="overflow-x-auto space-y-2">
            <TableTitle tw="flex items-center gap-2">Android Sales Today<StreamIcon />
            </TableTitle>
            {/* <PRINT data={data} /> */}
            <Table>
                <Table.Head>
                    <Table.HeadCell className="whitespace-nowrap">Product Details</Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">Due</Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">Seller</Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">Customer</Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">Sold At</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        Array.isArray(data) && data.map((e, i) => (
                            <Table.Row key={i}>
                                <Table.Cell className="whitespace-nowrap">
                                    <ProductDetails entity={e.entity} showDetails={true} />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap">{e.due}</Table.Cell>
                                <Table.Cell className="whitespace-nowrap">{e.seller.name}</Table.Cell>
                                <Table.Cell className="whitespace-nowrap">{e.customer.name}</Table.Cell>
                                <Table.Cell className="whitespace-nowrap">
                                    {new Date(e.createdAt).toLocaleString()}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}