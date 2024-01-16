import AppBarDashboard from "@/components/navbar/appbar-dashboard";
import Sidebar from "@/components/sidebar/sidebar";
import NextAuthProvider from "@/context/AuthProvider";
import { ReactNode } from "react";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <NextAuthProvider>
            <AppBarDashboard />
            <main className="flex">
                <Sidebar />
                <div className="flex-grow p-2">
                    {children}
                </div>
            </main>
        </NextAuthProvider>
    )
}

