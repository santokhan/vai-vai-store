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
    } else {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/user/role/?email=${session.user?.email}`
        const response = await fetch(url);
        const role = await response.json();

        if (role.role === "admin" || role.role === "super-admin") {
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
        return (
            <div className="min-h-screen grid place-items-center">
                <p>You do not have access to this page</p>
            </div>
        )
    }
}