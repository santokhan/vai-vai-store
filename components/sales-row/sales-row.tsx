import React from 'react';
import { Table } from 'flowbite-react';
import Button from '../button/button';
import { Add } from 'iconsax-react';
import { ProductTypeKeys, productTypes } from '@/utils/product-type';
import { SalesRowEntry, useSalesRowContext } from '@/context/sales-context';

interface Props {
    onOpenForm: (formType: ProductTypeKeys) => void;
}

const SalesRow: React.FC<Props> = ({ onOpenForm }) => {
    const { salesEntity, removeFromSales } = useSalesRowContext();

    const getCols = (salesEntity: SalesRowEntry[]): string[] => {
        return salesEntity.length > 0 ? Object.keys(salesEntity[0]) : [];
    };

    return (
        <div className="w-full overflow-x-auto">
            <Table>
                <Table.Head className="uppercase">
                    {getCols(salesEntity).map((objKey, i) => (
                        <Table.HeadCell key={i}>{objKey}</Table.HeadCell>
                    ))}
                    <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {salesEntity.map((row, index) => (
                        <Table.Row key={index}>
                            {getCols(salesEntity).map((colKey, i) => (
                                <Table.Cell key={i}>{row[colKey as keyof SalesRowEntry]}</Table.Cell>
                            ))}
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
