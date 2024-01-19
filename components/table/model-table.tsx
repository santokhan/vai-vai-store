'use client';

import { Brand, Model, ProductType } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';
import { Edit } from 'iconsax-react';
import React from 'react';

export function ModelDataTable({ brands, types, models }: { brands: Brand[], types: ProductType[], models: Model[] }) {
    function getModelsByBrandId(brandId: string) {
        return models.map((model: Model) => {
            if (model.brandId === brandId) {
                return model.model;
            } else {
                return null;
            }
        }).filter(e => e).join(', ');
    }

    return (
        <div className="overflow-x-auto">
            <Table className=''>
                <Table.Head>
                    <Table.HeadCell className='w-3/12'>Type</Table.HeadCell>
                    <Table.HeadCell className='w-3/12'>Brand</Table.HeadCell>
                    <Table.HeadCell className='w-3/12'>Model</Table.HeadCell>
                    <Table.HeadCell className='w-3/12'>Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {types.map((type: ProductType) => (
                        <React.Fragment key={type.id}>
                            <Table.Row className="">
                                <Table.Cell className="min-w-md font-bold text-gray-900 capitalize" colSpan={4}>
                                    {type.type}
                                </Table.Cell>
                            </Table.Row>
                            {brands.filter((brand: Brand) => brand.productTypeId === type.id).map((brand: Brand) => (
                                <React.Fragment key={brand.id}>
                                    <Table.Row className="divide-x">
                                        <Table.Cell className="min-w-[260px]"></Table.Cell>
                                        <Table.Cell className="min-w-[260px] font-medium text-gray-900 capitalize text-ellipsis">{brand.brandName}</Table.Cell>
                                        <Table.Cell className="min-w-[260px] font-medium text-gray-900 capitalize text-ellipsis">
                                            {getModelsByBrandId(brand.id)}
                                        </Table.Cell>
                                        <Table.Cell className="min-w-[260px]">
                                            {/* <button type='button' className="font-medium hover:text-blue-500"><Edit className="w-5 h-5 text-gray-500" /></button> */}
                                        </Table.Cell>
                                    </Table.Row>
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
