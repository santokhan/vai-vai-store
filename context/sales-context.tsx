'use client';
import { APISalesEntity } from "@/app/api/(store)/sales/entry/type";
import { OnlyChildrenProps } from "@/utils/props-type";
import { createContext, useContext, useState } from "react";

/** APISalesEntity is required for server */
export interface SalesRowIncludeBrandModel extends APISalesEntity {
    brand: string;
    model: string
}

export const SalesRowContext = createContext<{
    salesEntity: SalesRowIncludeBrandModel[];
    addToSales: (newSalesRow: SalesRowIncludeBrandModel) => void;
    removeFromSales: (stockId: string) => void;
    changeQuantity: (stockId: string, payload: 'plus' | 'minus') => void;
} | null>(null);

export default function SalesRowProvider({ children }: OnlyChildrenProps) {
    const [salesEntity, setSalesEntity] = useState<SalesRowIncludeBrandModel[]>([]);

    return (
        <SalesRowContext.Provider value={{
            salesEntity,
            addToSales(newSalesRow: SalesRowIncludeBrandModel) {
                // Entry if stockId is not exist in salesEntity
                if (!salesEntity.some((item) => item.stockId === newSalesRow.stockId)) {
                    newSalesRow = { ...newSalesRow, quantity: 1 }
                    setSalesEntity(prev => [...prev, newSalesRow])
                } else {
                    alert(`Already added to Sales Entity. stockId:${newSalesRow.stockId}`)
                    return;
                }
            },
            removeFromSales(stockId: string) {
                setSalesEntity(prev => prev.filter((item) => item.stockId !== stockId));
            },
            changeQuantity(stockId, payload) {
                setSalesEntity(prev => {
                    return prev.map((item) => {
                        if (item.stockId === stockId) {
                            return {
                                ...item,
                                quantity: payload === 'plus' ? item.quantity! + 1 : item.quantity! - 1
                            }
                        }
                        return item
                    })
                })
            }
        }}>{children}</SalesRowContext.Provider>
    );
}

export const useSalesRowContext = () => {
    const context = useContext(SalesRowContext);
    if (!context) {
        throw new Error("useSalesRowContext must be used within an OrderProvider");
    }
    return context;
};
