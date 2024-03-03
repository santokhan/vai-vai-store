'use client';

import { AllExpenses, ExpenseType, deleteExpenses, filteredExpenses } from '@/actions/expenses/expenses';
import { Installment, OtherCost, ShopRent } from '@/prisma/generated/client';
import { Table } from 'flowbite-react';
import React, { FC, useEffect, useState } from 'react';
import Actions, { ActionDelete } from '../action';
import { toast } from 'react-toastify';
import FilterByDateOnly, { DateType } from '@/block/expenses/filter-expenses';

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
    const [dateObject, setdateObject] = useState<{ start: string, end: string }>({ start: '', end: '' });
    const [filtering, setfiltering] = useState(false);

    useEffect(() => {
        async function getAllCost() {
            if (dateObject.start && dateObject.end) {
                setfiltering(true);
                const response: AllExpenses | undefined = await filteredExpenses(dateObject.start, dateObject.end);
                response && setExpenses(response);
                setfiltering(false);
            } else {
                const response: AllExpenses | undefined = await filteredExpenses();
                response && setExpenses(response);
            }
        }

        getAllCost();
    }, [dateObject]);

    const filterFunc = (date: string, startDate: DateType, endDate: DateType) => {
        if (date) {
            if (startDate && date >= startDate) {
                return true;
            }
            if (endDate && date <= endDate) {
                return true;
            }
        } else {
            return false;
        }
    }

    return (
        <div className='space-y-6'>
            <FilterByDateOnly loading={filtering} onFilter={(start, end) => {
                setdateObject({ start, end });
            }} />
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
