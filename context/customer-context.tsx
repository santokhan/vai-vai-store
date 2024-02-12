'use client';
import { APICustomerData } from "@/app/api/(store)/sales/entry/create-customer";
import { initialCustomer } from "@/utils/default-data";
import { OnlyChildrenProps } from "@/utils/props-type";
import { createContext, useContext, useState } from "react";

export const CustomerContext = createContext<{
    customer: APICustomerData;
    setCustomerData: (key: keyof APICustomerData, value: string) => void;
} | null>(null);

export default function CustomerProvider({ children }: OnlyChildrenProps) {
    const [customer, setcustomer] = useState<APICustomerData>(initialCustomer);

    return (
        <CustomerContext.Provider value={{
            customer,
            setCustomerData(key: string, value: string) {
                setcustomer({ ...customer, [key]: value })
            }
        }}>
            {children}
        </CustomerContext.Provider>
    );
}

export const useCustomerContext = () => {
    const context = useContext(CustomerContext);
    if (!context) {
        throw new Error("useSalesRowContext must be used within an OrderProvider");
    }
    return context;
};
