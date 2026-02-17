import { getProductSummary } from "@/actions/product-summary";

export async function ProductSummary() {
  const productSummary = await getProductSummary();
  if (!productSummary) return null;

  const { android, button, accessories } = productSummary;

  const array = [
    { name: "Available Android", amount: android, icon: "📱", color: "from-indigo-400 to-blue-500" },
    { name: "Available Button", amount: button, icon: "🎛️", color: "from-purple-400 to-pink-500" },
    { name: "Available Accessories", amount: accessories, icon: "🎧", color: "from-green-400 to-teal-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {array.map(({ name, amount, icon, color }, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br ${color} 
                        shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-300`}
          >
            {/* Decorative Circle */}
            <div className="absolute -top-6 right-6 w-16 h-16 bg-white/30 rounded-full animate-pulse"></div>

            {/* Icon */}
            <div className="text-7xl mb-4">{icon}</div>

            {/* Amount */}
            <div className="text-4xl font-extrabold text-white mb-2">{amount}</div>

            {/* Name */}
            <div className="text-lg font-semibold text-white/90 uppercase tracking-wide">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSummary