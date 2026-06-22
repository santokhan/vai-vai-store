import { dailyReportStat } from "@/actions/report/daily";
import DateSelector from "./DateSelector";

type CategoryKey = "android" | "button" | "accessories";

interface SalesByCategoryProps {
  salesByCategory: Partial<Record<CategoryKey, number>>;
  totalSales: number;
}

const CATEGORY_COLORS: Record<CategoryKey, string> = {
  android: "bg-blue-600",
  button: "bg-indigo-500",
  accessories: "bg-emerald-500",
};

const formatCurrency = (value: number) => `BDT ${value.toLocaleString()}`;

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
                <span className="font-medium capitalize">{category}</span>
                <span className="font-semibold">{formatCurrency(value)}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${CATEGORY_COLORS[category]} h-2 rounded-full`}
                  style={{ width: `${widthPercent}%` }}
                />
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

const StatCard = ({
  label,
  value,
  valueClassName = "text-gray-800",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm">
    <p className="text-sm text-gray-500">{label}</p>
    <h2 className={`text-xl font-bold mt-1 ${valueClassName}`}>{value}</h2>
  </div>
);

export default async function Page(props: Props) {
  const searchParams = props.searchParams;
  const date = searchParams.date || new Date().toISOString().split("T")[0];
  const report = await dailyReportStat(date);

  const totalSales = report?.totalSale ?? 0;
  const totalItems = report?.itemsSold ?? 0;
  const totalProfit = report?.profit ?? 0;
  const dueAmount = report?.dueAmount ?? 0;
  const totalDiscount = report?.totalDiscount ?? 0;
  const salesCount = report?.salesCount ?? 0;
  const sales = report?.sales ?? [];

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Daily Sales Report</h1>
          <p className="text-sm text-gray-500 mt-1">Showing complete information for {date}</p>
        </div>
        <DateSelector date={date} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        <StatCard label="Total Sales" value={formatCurrency(totalSales)} />
        <StatCard label="Items Sold" value={totalItems.toLocaleString()} />
        <StatCard label="Profit" value={formatCurrency(totalProfit)} valueClassName="text-green-600" />
        <StatCard label="Due Amount" value={formatCurrency(dueAmount)} valueClassName="text-red-600" />
        <StatCard label="Discount" value={formatCurrency(totalDiscount)} valueClassName="text-amber-600" />
        <StatCard label="Transactions" value={salesCount.toLocaleString()} valueClassName="text-blue-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-1">
          <SalesByCategory salesByCategory={report?.salesByCategory ?? {}} totalSales={totalSales} />
        </div>

        <div className="lg:col-span-2 bg-white p-5 rounded-2xl shadow-sm overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Transaction Summary</h3>
            <span className="text-sm text-gray-500">{sales.length} sale(s)</span>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-100 text-gray-700">
                <th className="p-3 rounded-l-lg">Invoice</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Seller</th>
                <th className="p-3">Items</th>
                <th className="p-3">Total</th>
                <th className="p-3">Due</th>
                <th className="p-3 rounded-r-lg">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {sales.length > 0 ? (
                sales.map((sale) => (
                  <tr key={sale.id} className="align-top">
                    <td className="p-3 font-medium text-gray-800">{sale.id}</td>
                    <td className="p-3 text-gray-600">
                      <div className="font-medium text-gray-800">{sale.customerName}</div>
                      <div>{sale.customerPhone || "N/A"}</div>
                    </td>
                    <td className="p-3 text-gray-600">{sale.sellerName}</td>
                    <td className="p-3 text-gray-600">
                      <div>{sale.totalItems.toLocaleString()} item(s)</div>
                      <div>{sale.items.length.toLocaleString()} line(s)</div>
                    </td>
                    <td className="p-3 font-semibold text-gray-800">{formatCurrency(sale.totalSale)}</td>
                    <td className="p-3 text-red-600 font-semibold">
                      {formatCurrency(sale.due)}
                      <div className="text-xs text-gray-500 font-normal">
                        {sale.dueDate ? `Due date: ${new Date(sale.dueDate).toLocaleDateString()}` : "No due date"}
                      </div>
                    </td>
                    <td className="p-3 text-gray-600">
                      <div>{new Date(sale.createdAt).toLocaleDateString()}</div>
                      <div className="text-xs text-gray-500">{new Date(sale.createdAt).toLocaleTimeString()}</div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-4 text-gray-500" colSpan={7}>
                    No sales found for this date.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        {sales.map((sale) => (
          <details key={sale.id} className="bg-white rounded-2xl shadow-sm overflow-hidden" open>
            <summary className="cursor-pointer list-none p-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">{sale.customerName}</h3>
                <p className="text-sm text-gray-500">
                  Invoice {sale.id} - Seller: {sale.sellerName}
                </p>
              </div>
              <div className="text-sm text-gray-600 md:text-right">
                <div>Total: <span className="font-semibold text-gray-800">{formatCurrency(sale.totalSale)}</span></div>
                <div>Due: <span className="font-semibold text-red-600">{formatCurrency(sale.due)}</span></div>
              </div>
            </summary>

            <div className="border-t border-gray-100 p-5 overflow-x-auto">
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span>Created: {new Date(sale.createdAt).toLocaleString()}</span>
                <span>Discount: {formatCurrency(sale.discount)}</span>
                <span>Items: {sale.totalItems}</span>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700">
                    <th className="p-3 text-left rounded-l-lg">Product</th>
                    <th className="p-3 text-left">Type</th>
                    <th className="p-3 text-right">Qty</th>
                    <th className="p-3 text-right">Unit Price</th>
                    <th className="p-3 text-right rounded-r-lg">Line Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {sale.items.map((item, index) => (
                    <tr key={`${sale.id}-${item.stockId}-${index}`}>
                      <td className="p-3 text-gray-800">
                        <div className="font-medium">
                          {item.brandName ? `${item.brandName} ` : ""}
                          {item.modelName || item.stockId}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.color ? `Color: ${item.color}` : ""}
                          {item.ram || item.rom ? ` ${item.ram || ""}/${item.rom || ""}` : ""}
                          {item.imei ? ` - ${item.imei}` : ""}
                        </div>
                      </td>
                      <td className="p-3 text-gray-600 capitalize">{item.type}</td>
                      <td className="p-3 text-right text-gray-800">{item.quantity}</td>
                      <td className="p-3 text-right text-gray-800">{formatCurrency(item.price)}</td>
                      <td className="p-3 text-right font-semibold text-gray-800">{formatCurrency(item.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
