'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/form/input-box';
import { FC, FormEvent, useState } from 'react';

export type DateType = string | null;

export const initialState = {
    startDate: null,
    endDate: null,
}

interface Props {
    onFilter: (startDate: string, endDate: string) => void;
    loading?: boolean;
}

const FilterByDateOnly: FC<Props> = ({ onFilter, loading }) => {
    const [formData, setFormData] = useState<{ startDate: DateType, endDate: DateType }>(initialState);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (formData.startDate && formData.endDate) {
            onFilter(formData.startDate, formData.endDate);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='block space-y-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                        value={formData?.startDate?.toString() || ""}
                        required={true}
                    />
                </InputBox>
                <InputBox htmlFor='endDate' labelName='End Date'>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        max={new Date().toISOString().split("T")[0]}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, endDate: e.target.value }))
                        }}
                        className="default"
                        value={formData?.endDate?.toString() || ""}
                        required={true}
                    />
                </InputBox>
            </div>

            <div>
                <Button variant="primary">Filter{loading && "..."}</Button>
            </div>
        </form>
    );
};

export default FilterByDateOnly;
