'use server';
import { getRole } from "@/actions/user/role";
import AppBarDashboard from "@/components/navbar/appbar-dashboard";
import NoAccess from "@/components/no-access";
import Sidebar from "@/components/sidebar/sidebar";
import { authOptions } from "@/lib/auth/auth";
import { OnlyChildrenProps } from "@/utils/props-type";
import { getServerSession } from "next-auth";
import { redirect, usePathname } from "next/navigation";
// Toastify is only available in /(store)/
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default async function DashboardLayout({ children }: OnlyChildrenProps) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect(`/auth/signin?redirect=${'/dashboard'}`);
    } else {
        const email = session.user?.email;
        if (email) {
            const role = await getRole(email);
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
                        <ToastContainer />
                    </>
                )
            } else {
                return <NoAccess />;
            }
        } else {
            return <NoAccess />;
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