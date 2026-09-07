'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/form/input-box';
import { SalesEntry } from '@/prisma/generated/client';
import { Filter } from 'iconsax-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { FC, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const d = new Date();
const today = d.toISOString().split('T')[0];

export const initialState = {
    IMEI: '',
    startDate: today,
    endDate: today,
}

export const FilterSubmit = () => (
    <Button variant="primary"><Filter className='w-4 h-4' /> Filter</Button>
)

interface Props {
    filterData: (callBack: (entry: SalesEntry, i: number) => void) => void
}

const FilterSales: FC<Props> = ({ filterData }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState<typeof initialState>(() => ({
        IMEI: searchParams.get('imei') ?? initialState.IMEI,
        startDate: searchParams.get('startDate') ?? initialState.startDate,
        endDate: searchParams.get('endDate') ?? initialState.endDate,
    }));
    const selectionRange = {
        startDate: d,
        endDate: d,
        key: 'selection',
    }
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { IMEI, startDate, endDate } = formData;

        const params = new URLSearchParams(searchParams.toString());
        IMEI ? params.set('imei', IMEI) : params.delete('imei');
        startDate ? params.set('startDate', startDate) : params.delete('startDate');
        endDate ? params.set('endDate', endDate) : params.delete('endDate');
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });

        if (IMEI || startDate || endDate) {
            filterData((entry) => {
                const entryCreatedAt = entry.createdAt.getTime();
                const entities = Array.isArray(entry.entity) ? entry.entity : [];
                const matchesIMEI = !IMEI || entities.some((entity: any) => entity.IMEI === IMEI);
                const isFiltered = (
                    matchesIMEI &&
                    (!startDate || entryCreatedAt >= new Date(startDate).getTime()) &&
                    (!endDate || entryCreatedAt <= new Date(endDate).getTime())
                );

                return isFiltered;
            });
        } else {
            toast(`Can not filter`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='block space-y-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <InputBox htmlFor='IMEI' labelName='IMEI'>
                    <input
                        type="text"
                        id="IMEI"
                        name="IMEI"
                        inputMode="numeric"
                        maxLength={15}
                        value={formData.IMEI}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, IMEI: e.target.value.replace(/\D/g, '') }))
                        }}
                        className="default"
                        placeholder="Enter IMEI"
                    />
                </InputBox>
                <InputBox htmlFor='startDate' labelName='Start Date'>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        max={new Date().toISOString().split("T")[0]}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, startDate: e.target.value }))
                        }}
                        className="default"
                        value={formData.startDate.toString()}
                    />
                </InputBox>
                <InputBox htmlFor='endDate' labelName='End Date'>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        max={new Date(d.getFullYear(), d.getMonth(), d.getDate() + 2).toISOString().split("T")[0]}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, endDate: e.target.value }))
                        }}
                        className="default"
                        value={formData.endDate.toString()}
                    />
                </InputBox>
            </div>

            <div>
                <FilterSubmit />
            </div>
        </form>
    );
};

export default FilterSales;
