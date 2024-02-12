'use client';
import React, { FC } from 'react';
import Button from './button/button';
import { OnlyChildrenProps } from '@/utils/props-type';

const PrintButton: FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <Button variant={'primary'} onClick={handlePrint}>Print</Button>
    );
};


const PrintWrapper: FC<OnlyChildrenProps> = ({ children }) => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="">
            {children}
            <Button variant={'primary'} onClick={handlePrint}>Print</Button>
        </div>
    );
};

export default PrintWrapper;