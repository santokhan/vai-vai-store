'use server';

import { getProductSummary } from "@/actions/product-summary";

export async function ProductSummary() {
    const productSummary = await getProductSummary();
    if (!productSummary) return null;

    const { android, button, accessories } = productSummary;

    const array = [
        { name: "Available Android", amount: android, icon: "📱", color: "from-blue-100 to-blue-200" },
        { name: "Available Button", amount: button, icon: "🎛️", color: "from-purple-100 to-purple-200" },
        { name: "Available Accessories", amount: accessories, icon: "🎧", color: "from-green-100 to-green-200" },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {array.map(({ name, amount, icon, color }, i) => (
                <div
                    key={i}
                    className={`flex flex-col items-center justify-center w-44 h-44 p-5 rounded-3xl bg-gradient-to-br ${color} 
                                shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center`}
                >
                    <div className="text-6xl mb-3">{icon}</div>
                    <div className="text-3xl font-extrabold text-gray-800 uppercase truncate">{amount}</div>
                    <div className="mt-1 text-sm font-medium text-gray-700 uppercase truncate">{name}</div>
                </div>
            ))}
        </div>
    );
}
