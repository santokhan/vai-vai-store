'use client';
import React, { FC, useRef, RefObject } from 'react';
import Button from './button/button';
import { OnlyChildrenProps } from '@/utils/props-type';
import { useReactToPrint } from 'react-to-print';

const PrintWrapper: FC<OnlyChildrenProps> = ({ children }) => {
    const componentRef: RefObject<HTMLDivElement> = useRef(null); // Define the type for the ref
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="space-y-6">
            <div className="" ref={componentRef}>
                {children}
            </div>
            <Button variant={'primary'} onClick={handlePrint}>Print</Button>
        </div>
    );
};

export default PrintWrapper;
