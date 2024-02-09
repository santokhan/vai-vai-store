'use client';
import React, { Fragment, ReactNode, createContext, useContext, useState } from "react";

export type OrderEntry = {
    stockId: string;
    type: string;
    quantity: number;
    price: number;
}

type OrderContextType = {
    orderEntry: OrderEntry[];
    addEntry: (data: OrderEntry) => void;
    deleteEntry: (stockId: string) => void;
}

type OrderProviderProps = {
    children: ReactNode;
}

export const OrderContext = createContext<OrderContextType | null>(null);

export default function OrderProvider({ children }: OrderProviderProps) {
    const [orderEntry, setOrderEntry] = useState<OrderEntry[]>([]);

    const addEntry = (data: OrderEntry) => {
        const { stockId, type, quantity, price } = data;
        setOrderEntry(prev => [...prev, { stockId, type, quantity, price }]);
    };

    const deleteEntry = (stockId: string) => {
        setOrderEntry(prev => prev.filter((item) => item.stockId !== stockId));
    };

    const value: OrderContextType = {
        orderEntry,
        addEntry,
        deleteEntry
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrderContext must be used within an OrderProvider");
    }
    return context;
};
