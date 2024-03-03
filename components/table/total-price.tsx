import React, { ReactNode } from 'react';

interface TotalPriceProps {
    children: ReactNode;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ children }) => {
    return (
        <div className='w-full bg-gray-100 rounded-lg text-center py-1 text-base'>
            {children}
        </div>
    );
}

export default TotalPrice;
