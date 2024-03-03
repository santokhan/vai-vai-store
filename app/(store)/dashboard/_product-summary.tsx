'use server';

import { getProductSummary } from "@/actions/product-summary";

export async function ProductSummary() {
    const productSummary = await getProductSummary();

    if (!productSummary) {
        return null;
    }

    const { android, button, accessories } = productSummary;
    const array = [
        {
            name: "available android",
            amount: android,
        },
        {
            name: "available button",
            amount: button,
        },
        {
            name: "available accessories",
            amount: accessories,
        },
    ]

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {array.map(({ name, amount }, i) => (
                <div className="flex flex-col items-center justify-center h-28 min-w-48 p-4 rounded-lg border-2 border-dashed bg-white" key={i}>
                    <div className="text-2xl font-semibold whitespace-nowrap flex items-center">
                        {amount}
                    </div>
                    <div className="mt-1 text-lg font-medium capitalize whitespace-nowrap">{name}</div>
                </div>
            ))}
        </div>
    )
}