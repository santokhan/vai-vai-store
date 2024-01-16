import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/auth/signin");
    }

    return (
        <div className="space-y-5 p-4">
            <pre>
                {JSON.stringify(session, null, 2)}
            </pre>
            <div className="">Dashboard</div>
        </div>
    )
}