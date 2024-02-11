'use client';
import { ReactNode, createContext, useContext, useState } from "react";

export type SalesRowEntry = {
    stockId: string;
    quantity?: number;
    discount: number;
    due: number;
    type: 'android' | 'button' | 'accessories'
    sellerId: string
}

export type SalesRowKeys = keyof SalesRowEntry;

type SalesContextType = {
    salesEntity: SalesRowEntry[];
    addToSales: (data: SalesRowEntry) => void;
    removeFromSales: (stockId: string) => void;
}

type SalesProviderProps = {
    children: ReactNode;
}

export const SalesRowContext = createContext<SalesContextType | null>(null);

export default function SalesRowProvider({ children }: SalesProviderProps) {
    const [salesEntity, setSalesEntity] = useState<SalesRowEntry[]>([]);
    // const [androidSales, setAndroidSales] = useState<SalesEntry[]>([]);
    // const [buttonSales, setButtonSales] = useState<SalesEntry[]>([]);
    // const [accessoriesSales, setAccessoriesSales] = useState<SalesEntry[]>([]);

    const addToSales = (data: SalesRowEntry) => {
        setSalesEntity(prev => [...prev, data]);
    };

    const removeFromSales = (stockId: string) => {
        setSalesEntity(prev => prev.filter((item) => item.stockId !== stockId));
    };

    const value: SalesContextType = {
        salesEntity,
        addToSales,
        removeFromSales
    };

    return (
        <SalesRowContext.Provider value={value}>
            {children}
        </SalesRowContext.Provider>
    );
}

export const useSalesRowContext = () => {
    const context = useContext(SalesRowContext);
    if (!context) {
        throw new Error("useSalesRowContext must be used within an OrderProvider");
    }
    return context;
};
