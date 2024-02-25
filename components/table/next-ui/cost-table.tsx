'use client';

import { AllExpenses, ExpenseType, deleteExpenses, getAllCostByMonth } from '@/actions/expenses/expenses';
import InputBox from '@/components/form/input-box';
import { Installment, OtherCost, ShopRent } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';
import React, { FC, useEffect, useState } from 'react';
import Actions, { ActionDelete } from '../action';
import { toast } from 'react-toastify';

const DataGrid: FC<{ data: ShopRent[] | Installment[] | OtherCost[], title: ExpenseType }> = ({ data, title }) => (
    <Table>
        <Table.Head>
            <Table.HeadCell className='w-1/3'>{title || 'Expenses'}</Table.HeadCell>
            <Table.HeadCell className='w-1/3'>Comment</Table.HeadCell>
            <Table.HeadCell className='w-1/3'>Created At</Table.HeadCell>
            <Table.HeadCell className='w-1/3'>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
            {data.map(({ id, amount, comment, createdAt }) => (
                <Table.Row key={id}>
                    <Table.Cell>{amount}</Table.Cell>
                    <Table.Cell>{comment}</Table.Cell>
                    <Table.Cell>{new Date(createdAt).toLocaleString()}</Table.Cell>
                    <Table.Cell>
                        <Actions>
                            <ActionDelete handleClick={async () => {
                                const res = await deleteExpenses(id, title);
                                res && toast(res.message)
                            }} />
                        </Actions>
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
)

const FilterableTable: React.FC = () => {
    const date = new Date();


    const [filteredYear, setFilteredYear] = useState<number>(date.getFullYear());
    const [filteredMonth, setFilteredMonth] = useState<number>(date.getMonth() + 1);
    const [expenses, setExpenses] = useState<AllExpenses | undefined>(undefined);


    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredYear(Number.parseInt(e.target.value));
    };


    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        const month: string = value.split('-')[1];
        setFilteredMonth(Number.parseInt(month));
    };


    useEffect(() => {
        async function getAllCost() {
            const response: AllExpenses | undefined = await getAllCostByMonth(filteredYear, filteredMonth);
            response && setExpenses(response);
        }

        getAllCost();
    }, [filteredMonth, filteredYear])

    const currentMonth = `${filteredYear}-${filteredMonth < 10 ? `0${filteredMonth}` : filteredMonth}`;

    return (
        <div className='space-y-6'>
            <div className="flex items-center gap-4 flex-wrap">
                <InputBox className='max-w-sm flex items-center'>
                    <input
                        type='number'
                        className='default'
                        value={filteredYear}
                        onChange={handleYearChange}
                    />
                </InputBox>
                <InputBox className='max-w-sm flex items-center'>
                    <input
                        type='month'
                        className='default'
                        onChange={handleMonthChange}
                        value={currentMonth}
                    />
                </InputBox>
            </div>
            {
                expenses ?
                    <>
                        <DataGrid title='rent' data={expenses.rent} />
                        <DataGrid title='installment' data={expenses.installment} />
                        <DataGrid title='other' data={expenses.other} />
                    </>
                    :
                    <div className="">Loading...</div>
            }
        </div>
    );
};

export default FilterableTable;
