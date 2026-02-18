import { dailyReportStat } from "@/actions/report/daily";
import DateSelector from "./DateSelector";

type CategoryKey = 'android' | 'button' | 'accessories';

interface SalesByCategoryProps {
  salesByCategory: Partial<Record<CategoryKey, number>>;
  totalSales: number; // required to calculate proportional widths
}

const CATEGORY_COLORS: Record<CategoryKey, string> = {
  android: 'bg-blue-600',
  button: 'bg-indigo-500',
  accessories: 'bg-emerald-500',
};

const SalesByCategory = ({ salesByCategory, totalSales }: SalesByCategoryProps) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-4">Sales by Category</h3>

      <div className="space-y-4">
        {(Object.keys(CATEGORY_COLORS) as CategoryKey[]).map((category) => {
          const value = salesByCategory[category] || 0;
          const widthPercent = totalSales ? (value / totalSales) * 100 : 0;

          return (
            <div key={category}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <span className="font-semibold">৳ {value}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${CATEGORY_COLORS[category]} h-2 rounded-full`}
                  style={{ width: `${widthPercent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface Props {
  searchParams: {
    date: string;
  };
}

export default async function Page(props: Props) {
  const searchParams = props.searchParams;
  const date = searchParams.date || new Date().toISOString().split("T")[0];
  const report = await dailyReportStat(date);

  // Fallbacks in case report is null
  const totalSales = report?.totalSale ?? 0;
  const totalItems = report?.itemsSold ?? 0;
  const totalProfit = report?.profit ?? 0;
  const dueAmount = report?.dueAmount ?? 0;

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-semibold text-gray-800">Daily Sales Report</h1>
        <DateSelector date={date} />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Total Sales</p>
          <h2 className="text-xl font-bold text-gray-800 mt-1">
            ৳ {totalSales.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Items Sold</p>
          <h2 className="text-xl font-bold text-gray-800 mt-1">
            {totalItems}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Profit</p>
          <h2 className="text-xl font-bold text-green-600 mt-1">
            ৳ {totalProfit.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Due Amount</p>
          <h2 className="text-xl font-bold text-red-600 mt-1">
            ৳ {dueAmount.toLocaleString()}
          </h2>
        </div>
      </div>

      <SalesByCategory salesByCategory={report?.salesByCategory ?? {}} totalSales={totalSales} />
    </>
  );
}
