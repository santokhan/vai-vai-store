'use client'
import { useOrderContext } from "@/context/order-context";
import { Table } from "flowbite-react";
import Button from "../button/button";
import { Add, ShoppingCart } from "iconsax-react";

export const cols = ["Sales ID", "Type", "Quantity", "Price", "Action"];

export default function SalesRow({ onOpenForm }: { onOpenForm: () => void }) {
    const { orderEntry, deleteEntry } = useOrderContext();

    return (
        <div className="w-full overflow-x-auto">
            <Table>
                <Table.Head>
                    {cols.map((col, index) => <Table.HeadCell key={index}>{col}</Table.HeadCell>)}
                </Table.Head>
                <Table.Body>
                    {orderEntry.map((item, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>#{item.stockId.slice(0, 6)}</Table.Cell>
                            <Table.Cell>{item.type}</Table.Cell>
                            <Table.Cell>{item.quantity}</Table.Cell>
                            <Table.Cell>{item.price}</Table.Cell>
                            <Table.Cell>
                                <button
                                    type="button"
                                    className="hover:text-red-500"
                                    onClick={() => { deleteEntry(item.stockId) }}
                                >Delete</button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                    <Table.Row>
                        <Table.Cell colSpan={5}>
                            <div className="flex gap-2 items-center">
                                <Button variant="secondary" onClick={onOpenForm}>
                                    <Add className="w-5 h-5" />Add new item
                                </Button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}