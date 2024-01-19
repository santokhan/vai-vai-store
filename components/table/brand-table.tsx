'use client';

import { Brand, ProductType } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';
import { Edit } from 'iconsax-react';
import React from 'react';

export function BrandTable({ brands, types }: { brands: any, types: any }) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell className='w-5/12'>Type</Table.HeadCell>
                    <Table.HeadCell className='w-4/12'>Brand</Table.HeadCell>
                    <Table.HeadCell className='w-3/12'>Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {types.map((type: ProductType) => (
                        <React.Fragment key={type.id}>
                            <Table.Row className="">
                                <Table.Cell className="whitespace-nowrap font-semibold text-gray-900 capitalize" colSpan={3}>
                                    {type.type}
                                </Table.Cell>
                            </Table.Row>
                            {brands.filter((brand: Brand) => brand.productTypeId === type.id).map((brand: Brand) => (
                                <Table.Row className="" key={brand.id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 capitalize"></Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 capitalize">
                                        {brand.brandName}
                                    </Table.Cell>
                                    <Table.Cell className=''>
                                        {/* <button type='button' className="font-medium hover:text-blue-500"><Edit className="w-5 h-5 text-gray-500" /></button> */}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </React.Fragment>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
