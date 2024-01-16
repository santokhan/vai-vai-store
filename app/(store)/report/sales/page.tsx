import AppBarDashboard from "@/components/navbar/appbar-dashboard";
import Sidebar from "@/components/sidebar/sidebar";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Home({ children }: { children: ReactNode }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect("/auth/signin?redirect=/dashboard");
    } else {
        return (
            <div>
                <pre>
                    {JSON.stringify(session, null, 2)}
                </pre>
                {children}
            </div>
        )
    }
}