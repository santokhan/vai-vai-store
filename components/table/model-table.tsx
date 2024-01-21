'use client';

import { Brand, Model, ProductType } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';
import { Edit } from 'iconsax-react';
import React from 'react';

export function ModelDataTable({ brands, types, models }: { brands: Brand[], types: ProductType[], models: Model[] }) {
    function getModelsByBrandId(brandId: string) {
        return models.filter((model: Model) => model.brandId === brandId);
    }

    return (
        <div className="overflow-x-auto">
            <Table className=''>
                <Table.Head>
                    <Table.HeadCell className='w-4/12'>Type</Table.HeadCell>
                    <Table.HeadCell className='w-4/12'>Brand</Table.HeadCell>
                    <Table.HeadCell className='w-4/12'>Model</Table.HeadCell>
                    {/* <Table.HeadCell className='w-3/12'>Actions</Table.HeadCell> */}
                </Table.Head>
                <Table.Body className="divide-y">
                    {types.map((type: ProductType) => (
                        <React.Fragment key={type.id}>
                            <Table.Row className="">
                                <Table.Cell className="min-w-md font-bold text-gray-900 capitalize" colSpan={3}>
                                    {type.type}
                                </Table.Cell>
                            </Table.Row>
                            {brands.filter((brand: Brand) => brand.productTypeId === type.id).map((brand: Brand) => (
                                <Table.Row className="divide-x" key={brand.id}>
                                    <Table.Cell className="min-w-[260px]"></Table.Cell>
                                    <Table.Cell className="min-w-[260px] font-medium text-gray-900 capitalize text-ellipsis">{brand.brandName}</Table.Cell>
                                    <Table.Cell className="min-w-[260px] font-medium text-gray-900 capitalize text-ellipsis">
                                        <ol className='list-decimal list-inside+ pl-4'>
                                            {getModelsByBrandId(brand.id).map((model: Model) => (
                                                <li key={model.id} id={model.id}>
                                                    <span className='pl-1'>{model.model}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </Table.Cell>
                                    {/* <Table.Cell className="min-w-[260px]">
                                        <button type='button' className="font-medium hover:text-blue-500"><Edit className="w-5 h-5 text-gray-500" /></button>
                                    </Table.Cell> */}
                                </Table.Row>
                            ))}
                        </React.Fragment>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
