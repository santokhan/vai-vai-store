'use server';

import { TotalSummary, actionTotalSummary } from "@/actions/total-summary";
import formatCurrency from "@/utils/currency-formatter";

export type SummaryKeys = 'name' | 'amount';
export interface SummaryObj {
    name: string,
    amount: number
};
export type Summary = SummaryObj[];


export async function TotalSummary() {
    const totalSummary: TotalSummary | undefined = await actionTotalSummary();

    if (!totalSummary) {
        return null;
    }

    const { purchase, sales, due, availablePurchase } = totalSummary;
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
        {
            name: "stock available purchase",
            amount: availablePurchase,
        },
    ]

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {array.map(({ name, amount }, i) => (
                <div className="flex flex-col items-center justify-center h-28 min-w-48 p-4 rounded-lg border-2 border-dashed bg-white" key={i}>
                    <div className="text-2xl font-semibold whitespace-nowrap flex items-center">
                        {formatCurrency(amount)}
                    </div>
                    <div className="mt-1 text-lg font-medium capitalize whitespace-nowrap">{name}</div>
                </div>
            ))}
        </div>
    )
}