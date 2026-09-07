'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/form/input-box';
import { SalesEntry } from '@/prisma/generated/client';
import { Filter } from 'iconsax-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

const today = new Date().toISOString().split('T')[0];

export const initialState = {
    IMEI: '',
    startDate: '',
    endDate: '',
};

export const FilterSubmit = () => (
    <Button variant="primary">
        <Filter className="h-4 w-4" /> Filter
    </Button>
);

interface Props {
    filterData: (matches: (entry: SalesEntry) => boolean) => void;
}

export default function FilterSales({ filterData }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState(() => ({
        IMEI: searchParams.get('imei') ?? initialState.IMEI,
        startDate: searchParams.get('startDate') ?? initialState.startDate,
        endDate: searchParams.get('endDate') ?? initialState.endDate,
    }));

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { IMEI, startDate, endDate } = formData;
        const params = new URLSearchParams(searchParams.toString());
        const start = startDate ? new Date(startDate).getTime() : 0;
        const end = endDate ? new Date(endDate).getTime() : Infinity;

        IMEI ? params.set('imei', IMEI) : params.delete('imei');
        startDate ? params.set('startDate', startDate) : params.delete('startDate');
        endDate ? params.set('endDate', endDate) : params.delete('endDate');
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });

        filterData((entry) => {
            const entities = Array.isArray(entry.entity) ? entry.entity : [];
            const hasIMEI = !IMEI || entities.some((entity: any) => entity?.IMEI === IMEI);
            const createdAt = entry.createdAt.getTime();

            return hasIMEI && createdAt >= start && createdAt <= end;
        });
    }

    function updateField(field: keyof typeof initialState, value: string) {
        setFormData((current) => ({ ...current, [field]: value }));
    }

    return (
        <form onSubmit={handleSubmit} className="block space-y-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <InputBox htmlFor="IMEI" labelName="IMEI">
                    <input
                        id="IMEI"
                        name="IMEI"
                        type="text"
                        inputMode="numeric"
                        maxLength={15}
                        value={formData.IMEI}
                        onChange={(event) => updateField('IMEI', event.target.value.replace(/\D/g, ''))}
                        className="default"
                        placeholder="Enter IMEI"
                    />
                </InputBox>

                <InputBox htmlFor="startDate" labelName="Start Date">
                    <input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        max={today}
                        onChange={(event) => updateField('startDate', event.target.value)}
                        className="default"
                    />
                </InputBox>

                <InputBox htmlFor="endDate" labelName="End Date">
                    <input
                        id="endDate"
                        name="endDate"
                        type="date"
                        value={formData.endDate}
                        max={today}
                        onChange={(event) => updateField('endDate', event.target.value)}
                        className="default"
                    />
                </InputBox>
            </div>

            <FilterSubmit />
        </form>
    );
}