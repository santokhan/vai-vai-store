import { FC } from 'react';
import { Table } from 'flowbite-react';
import Button from '../button/button';
import { Add } from 'iconsax-react';
import { ProductTypeKeys, productTypes } from '@/utils/product-type';
import { SalesRowIncludeBrandModel, useSalesRowContext } from '@/context/sales-context';
import FormTitle from '../form/title';

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
        <div className="w-full overflow-x-auto space-y-2">
            <FormTitle>Sales Entity</FormTitle>
            {/* Same as Invoice table you can re-use this table */}
            <Table>
                <Table.Head className="uppercase">
                    <Table.HeadCell>Type</Table.HeadCell>
                    <Table.HeadCell>Brand</Table.HeadCell>
                    <Table.HeadCell>Model</Table.HeadCell>
                    <Table.HeadCell>Quantity</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>

                    <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {salesEntity.map((row, index) => (
                        <Table.Row key={index}>
                            <Table.Cell className='capitalize'>{row.type}</Table.Cell>
                            <Table.Cell className='capitalize'>{row.brand}</Table.Cell>
                            <Table.Cell className='capitalize'>{row.model}</Table.Cell>
                            <Table.Cell>{row.quantity}</Table.Cell>
                            <Table.Cell>{row.price}</Table.Cell>

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
                                        disabled={type !== 'android'}
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
    );
};

export default SalesRow;
