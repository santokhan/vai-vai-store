'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/form/input-box';
import { SalesEntry } from '@/prisma/generated/client';
import { Filter } from 'iconsax-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

const today = new Date().toISOString().split('T')[0];

type FormState = {
    imei: string;
    startDate: string;
    endDate: string;
};

interface Props {
    filterData: (matches: (entry: SalesEntry) => boolean) => void;
}

export default function FilterSales({ filterData }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState<FormState>(() => ({
        imei: searchParams.get('imei') ?? '',
        startDate: searchParams.get('startDate') ?? '',
        endDate: searchParams.get('endDate') ?? '',
    }));

    function updateField(field: keyof FormState, value: string) {
        setFormData((current) => ({ ...current, [field]: value }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { imei, startDate, endDate } = formData;
        const params = new URLSearchParams(searchParams.toString());

        imei ? params.set('imei', imei) : params.delete('imei');
        startDate ? params.set('startDate', startDate) : params.delete('startDate');
        endDate ? params.set('endDate', endDate) : params.delete('endDate');
        window.history.replaceState(null, '', `${pathname}?${params.toString()}`);
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
                        value={formData.imei}
                        onChange={(event) => updateField('imei', event.target.value.replace(/\D/g, ''))}
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
                        onChange={(event) => updateField('startDate', event.target.value)}
                        max={today}
                        className="default"
                    />
                </InputBox>

                <InputBox htmlFor="endDate" labelName="End Date">
                    <input
                        id="endDate"
                        name="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(event) => updateField('endDate', event.target.value)}
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