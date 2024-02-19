'use client';

import { OnlyChildrenProps } from "@/utils/props-type";
import { createContext, useContext, useState } from "react";

export interface SidebarContext {
    activeNavTitle: string;
    handleExpand(title: string): void;
}

export const SidebarContext = createContext<SidebarContext | null>(null);

export default function SidebarProvider({ children }: OnlyChildrenProps) {
    const [activeNavTitle, setactiveNavTitle] = useState<string>('');

    return (
        <SidebarContext.Provider value={{
            activeNavTitle,
            handleExpand(newTitle: string) {
                alert(newTitle);
                if (activeNavTitle == newTitle) {
                    setactiveNavTitle('');
                } else {
                    setactiveNavTitle(newTitle);
                }
            },
        }}>{children}</SidebarContext.Provider>
    );
}

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSalesRowContext must be used within an OrderProvider");
    }
    return context;
};
