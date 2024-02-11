'use client';
import { OnlyChildrenProps } from "@/utils/props-type";
import { createContext, useContext, useState } from "react";

export type SellerData = {
    sellerId: string;
    due: number;
    discount: number;
}

export const SellerContext = createContext<{
    seller: SellerData;
    setSellerData: (key: keyof SellerData, value: string) => void;
} | null>(null);

export default function SellerProvider({ children }: OnlyChildrenProps) {
    const [seller, setSeller] = useState<SellerData>({
        sellerId: '',
        discount: 0,
        due: 0,
    });

    return (
        <SellerContext.Provider value={{
            seller,
            setSellerData(key: string, value: string) {
                setSeller({ ...seller, [key]: value })
            }
        }}>{children}</SellerContext.Provider>
    );
}

export const useSellerContext = () => {
    const context = useContext(SellerContext);
    if (!context) {
        throw new Error("useSalesRowContext must be used within an OrderProvider");
    }
    return context;
};
