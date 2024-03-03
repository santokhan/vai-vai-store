'use client';

import { Brand, ProductType } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';

export function BrandTable({ brands, types }: { brands: any, types: any }) {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {types.map((type: ProductType) =>
                <div className="w-full overflow-x-auto" key={type.id}>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell className='w-6/12'>{type.type} Brand</Table.HeadCell>
                            {/* <Table.HeadCell className='w-6/12'>Actions</Table.HeadCell> */}
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {brands.filter((brand: Brand) => brand.productTypeId === type.id).map((brand: Brand) => (
                                <Table.Row className="" key={brand.id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 capitalize py-3">
                                        {brand.brandName}
                                    </Table.Cell>
                                    {/* <Table.Cell className='py-3'>
                                        <button type='button' className="font-medium hover:text-blue-500"><Edit className="w-5 h-5 text-gray-500" /></button>
                                    </Table.Cell> */}
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            )}
        </div >
    )
}
