'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/form/input-box';
import { SalesEntry } from '@/prisma/generated/client';
import { Filter } from 'iconsax-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';

const today = new Date().toISOString().split('T')[0];

interface Props {
    filterData: (matches: (entry: SalesEntry) => boolean) => void;
}

export default function FilterSales({ filterData }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const imei = String(formData.get('IMEI') ?? '');
        const startDate = String(formData.get('startDate') ?? '');
        const endDate = String(formData.get('endDate') ?? '');
        const params = new URLSearchParams(searchParams.toString());

        imei ? params.set('imei', imei) : params.delete('imei');
        startDate ? params.set('startDate', startDate) : params.delete('startDate');
        endDate ? params.set('endDate', endDate) : params.delete('endDate');
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        router.refresh();

        const start = startDate ? new Date(startDate).getTime() : 0;
        const end = endDate ? new Date(endDate).getTime() : Infinity;

        filterData((entry) => {
            const entities = Array.isArray(entry.entity) ? entry.entity : [];
            const matchesIMEI = !imei || entities.some((entity: any) => entity?.IMEI === imei);
            const createdAt = entry.createdAt.getTime();

            return matchesIMEI && createdAt >= start && createdAt <= end;
        });
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
                        defaultValue={searchParams.get('imei') ?? ''}
                        className="default"
                        placeholder="Enter IMEI"
                    />
                </InputBox>

                <InputBox htmlFor="startDate" labelName="Start Date">
                    <input
                        id="startDate"
                        name="startDate"
                        type="date"
                        defaultValue={searchParams.get('startDate') ?? ''}
                        max={today}
                        className="default"
                    />
                </InputBox>

                <InputBox htmlFor="endDate" labelName="End Date">
                    <input
                        id="endDate"
                        name="endDate"
                        type="date"
                        defaultValue={searchParams.get('endDate') ?? ''}
                        max={today}
                        className="default"
                    />
                </InputBox>
            </div>

            <Button type="submit" variant="primary">
                <Filter className="h-4 w-4" /> Filter
            </Button>
        </form>
    );
}