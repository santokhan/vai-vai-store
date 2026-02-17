'use server';

import type { TotalSummary } from "@/actions/total-summary";
import { actionTotalSummary } from "@/actions/total-summary";
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
    const summaryArray: Summary = [
        { name: "Total Purchase", amount: purchase },
        { name: "Stock Available Purchase", amount: availablePurchase },
        { name: "Total Sales", amount: sales },
        { name: "Total Due", amount: due },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {summaryArray.map(({ name, amount }, i) => (
                <div
                    key={i}
                    className="flex flex-col items-center justify-center flex-1 min-w-[200px] max-w-xs p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="text-3xl font-bold text-blue-600">
                        {formatCurrency(amount)}
                    </div>
                    <div className="mt-2 text-lg font-medium text-gray-700 text-center">
                        {name}
                    </div>
                </div>
            ))}
        </div>
    );
}
