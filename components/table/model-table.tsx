'use client';

import { Brand, Model, ProductType } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';
import React from 'react';

export function ModelDataTable({ brands, types, models }: { brands: Brand[], types: ProductType[], models: Model[] }) {
    function getModelsByBrandId(brandId: string) {
        return models.filter((model: Model) => model.brandId === brandId);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {types?.map((type: ProductType) => (
                <div key={type.id} className='overflow-x-auto bg-white shadow rounded-lg'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell className='w-6/12'>{type.type} Brand</Table.HeadCell>
                            <Table.HeadCell className='w-6/12'>{type.type} Model</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {brands.filter((brand: Brand) => brand.productTypeId === type.id).map((brand: Brand) => (
                                <Table.Row className="divide-x" key={brand.id}>
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
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            ))}
        </div>
    )
}
