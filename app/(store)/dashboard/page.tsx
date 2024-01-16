import { ReactNode } from "react";

export default async function Home({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}