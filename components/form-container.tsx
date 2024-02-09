import { ReactNode } from "react";

export default function FormContainer({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto bg-white p-4 lg:p-6 rounded-xl space-y-6">
            {children}
        </div>
    )
}