import { getRole } from "@/actions/user/role";
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
        if (session.user?.email) {
            const role = await getRole(session.user?.email);
            if (role === "admin" || role === "super-admin") {
                return (
                    <>
                        <AppBarDashboard />
                        <main className="flex">
                            <Sidebar />
                            <div className="flex-grow p-4 lg:p-6 space-y-4 overflow-hidden">
                                {children}
                            </div>
                        </main>
                    </>
                )
            } else {
                return (
                    <div className="min-h-screen grid place-items-center">
                        <p>You do not have access to this page</p>
                    </div>
                )
            }
        } else {
            return (
                <div className="min-h-screen grid place-items-center">
                    <p>You do not have access to this page</p>
                </div>
            )
        }
    }

    // return (
    //     <>
    //         <AppBarDashboard />
    //         <main className="flex">
    //             <Sidebar />
    //             <div className="flex-grow p-6 space-y-4">
    //                 {children}
    //             </div>
    //         </main>
    //     </>
    // )
}