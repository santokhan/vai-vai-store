import AppBarDashboard from "@/components/navbar/appbar-dashboard";
import Sidebar from "@/components/sidebar/sidebar";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect("/auth/signin?redirect=/dashboard");
    }
    return (
        <>
            <AppBarDashboard />
            <main className="flex">
                <Sidebar />
                <div className="flex-grow p-4 space-y-4">
                    {children}
                </div>
            </main>
        </>
    )
}