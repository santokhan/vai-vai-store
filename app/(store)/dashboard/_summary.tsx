'use server';

import { actionTotalSummary } from "@/actions/total-summary";

export type SummaryKeys = 'name' | 'amount';
export interface SummaryObj {
    name: string,
    amount: number
};
export type Summary = SummaryObj[];


export async function TotalSummary() {
    const totalSummary = await actionTotalSummary();

    if (!totalSummary) {
        return null;
    }

    const { purchase, sales, due } = totalSummary;
    const array = [
        {
            name: "total Purchase",
            amount: purchase,
        },
        {
            name: "total sales",
            amount: sales,
        },
        {
            name: "total Due",
            amount: due,
        },
    ]

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {array.map(({ name, amount }, i) => (
                <div className="flex flex-col items-center justify-center h-20 md:h-24 min-w-36 md:min-w-40 p-4 rounded-lg border-2 border-dashed bg-white" key={i}>
                    <div className="text-xl font-semibold whitespace-nowrap">${amount}</div>
                    <div className="mt-1 font-medium capitalize whitespace-nowrap">{name}</div>
                </div>
            ))}
        </div>
    )
}