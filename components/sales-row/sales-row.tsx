import { FC, useState } from 'react';
import { Table } from 'flowbite-react';
import Button from '../button/button';
import { Add, Check, Minus, TickCircle } from 'iconsax-react';
import { ProductTypeKeys, productTypes } from '@/utils/product-type';
import { SalesRowIncludeBrandModel, useSalesRowContext } from '@/context/sales-context';
import FormTitle from '../form/title';
import Actions, { ActionEdit } from '../table/action';

const ControlQuantity: FC<{ stockId: string; quantity: number }> = ({ stockId, quantity }) => {
    const { changeQuantity } = useSalesRowContext();

    return (
        <div className='inline-flex w-auto max-w-[6rem] items-center'>
            <button type="button" onClick={() => { changeQuantity(stockId, 'minus') }}
                className="grid h-8 w-8 place-items-center hover:bg-gray-100 focus:outline-none">
                <Minus className="w-4 h-4" />
            </button>
            <span className='p-2'>{quantity}</span>
            <button type="button" onClick={() => { changeQuantity(stockId, 'plus') }}
                className="grid h-8 w-8 place-items-center hover:bg-gray-100 focus:outline-none">
                <Add className="w-4 h-4" />
            </button>
        </div>
    );
}

const EditablePrice: FC<{ price: number; stockId: string }> = ({ price, stockId }) => {
    const [editing, setEditing] = useState(false);
    const { changePrice } = useSalesRowContext();
    const [newPrice, setNewPrice] = useState(price);

    return (
        <div className="">
            {
                editing ?
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        changePrice(stockId, newPrice);
                        setEditing(false);
                    }} className="flex items-center gap-2">
                        <input type="number" className="default h-8" value={newPrice} onChange={e => {
                            setNewPrice(Number(e.target.value))
                        }} />
                        <button className='hover:text-blue-500'><TickCircle className='w-5 h-5' /></button>
                    </form>
                    :
                    <Actions>
                        {price}
                        <ActionEdit handleClick={() => { setEditing(true) }} />
                    </Actions>
            }
        </div>
    )
}

interface Props {
    onOpenForm: (formType: ProductTypeKeys) => void;
}

const SalesRow: FC<Props> = ({ onOpenForm }) => {
    const { salesEntity, removeFromSales } = useSalesRowContext();

    const getCols = (salesEntity: SalesRowIncludeBrandModel[]): string[] => {
        if (salesEntity.length > 0) {
            return Object.keys(salesEntity[0]).filter((key) => key !== 'stockId');
        } else {
            return [];
        }
    };

    return (
        <div className="w-full space-y-2">
            <FormTitle>Sales Entity</FormTitle>
            {/* Same as Invoice table you can re-use this table */}
            <div className="bg-white rounded-lg overflow-x-auto">
                <Table>
                    <Table.Head className="uppercase whitespace-nowrap">
                        <Table.HeadCell>Type</Table.HeadCell>
                        <Table.HeadCell>Brand & Model</Table.HeadCell>
                        <Table.HeadCell>Quantity</Table.HeadCell>
                        <Table.HeadCell>Selling Price</Table.HeadCell>
                        <Table.HeadCell>Total Price</Table.HeadCell>

                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {salesEntity.map((row, index) => (
                            <Table.Row key={index}>
                                <Table.Cell className='capitalize'>{row.type}</Table.Cell>
                                <Table.Cell className='capitalize'>{row.brand} {row.model}</Table.Cell>
                                <Table.Cell>
                                    {
                                        row.type == 'android' ?
                                            row.quantity
                                            :
                                            <ControlQuantity stockId={row.stockId} quantity={row.quantity} />
                                    }
                                </Table.Cell>
                                <Table.Cell><EditablePrice price={row.price} stockId={row.stockId} /></Table.Cell>
                                <Table.Cell>{row.price * row.quantity}</Table.Cell>

                                <Table.Cell>
                                    <button
                                        type="button"
                                        className="hover:text-red-500"
                                        onClick={() => {
                                            removeFromSales(row.stockId);
                                        }}
                                    >
                                        Remove
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                        <Table.Row>
                            <Table.Cell colSpan={getCols(salesEntity).length + 1}>
                                <div className="flex gap-2 items-center">
                                    {productTypes.map((type, index) => (
                                        <Button
                                            key={index}
                                            variant="secondary"
                                            onClick={() => {
                                                onOpenForm(type);
                                            }}
                                            disabled={false}
                                        >
                                            <Add className="w-5 h-5" />
                                            {type}
                                        </Button>
                                    ))}
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default SalesRow;
