import { stockAvailabilityReport } from "@/actions/report/stock";
import DateSelector from "./DateSelector";

type StockType = "android" | "button" | "accessories";

const formatCurrency = (value: number) => `BDT ${value.toLocaleString()}`;

const TYPE_LABELS: Record<StockType, string> = {
  android: "Android",
  button: "Button",
  accessories: "Accessories",
};

const TYPE_COLORS: Record<StockType, string> = {
  android: "bg-blue-600",
  button: "bg-indigo-500",
  accessories: "bg-emerald-500",
};

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

function StockBadge({ type }: { type: StockType }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white ${TYPE_COLORS[type]}`}>
      {TYPE_LABELS[type]}
    </span>
  );
}

interface Props {
  searchParams: {
    date: string;
  };
}

export default async function Page(props: Props) {
  const searchParams = props.searchParams;
  const date = searchParams.date || new Date().toISOString().split("T")[0];
  const report = await stockAvailabilityReport(date);

  const rows = report?.rows ?? [];

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Stock Availability Report</h1>
          <p className="text-sm text-gray-500 mt-1">Showing available stock for {date}</p>
        </div>
        <DateSelector date={date} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Available" value={(report?.totalAvailable ?? 0).toLocaleString()} />
        <StatCard label="Android" value={(report?.byType.android ?? 0).toLocaleString()} valueClassName="text-blue-600" />
        <StatCard label="Button" value={(report?.byType.button ?? 0).toLocaleString()} valueClassName="text-indigo-600" />
        <StatCard label="Accessories" value={(report?.byType.accessories ?? 0).toLocaleString()} valueClassName="text-emerald-600" />
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm mb-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-semibold text-gray-700">Available stock value</h3>
            <p className="text-sm text-gray-500">Calculated from the selected date cutoff.</p>
          </div>
          <div className="text-2xl font-bold text-gray-800">{formatCurrency(report?.totalValue ?? 0)}</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-700">Available items</h3>
          <span className="text-sm text-gray-500">{rows.length} record(s)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-100 text-gray-700">
                <th className="p-3 rounded-l-lg">Type</th>
                <th className="p-3">Product</th>
                <th className="p-3">Details</th>
                <th className="p-3 text-right">Available</th>
                <th className="p-3 text-right">Purchase</th>
                <th className="p-3 text-right">Selling</th>
                <th className="p-3 text-right rounded-r-lg">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {rows.length > 0 ? (
                rows.map((row) => (
                  <tr key={row.stockId} className="align-top">
                    <td className="p-3">
                      <StockBadge type={row.type} />
                    </td>
                    <td className="p-3 text-gray-800">
                      <div className="font-medium">{row.brandName || "N/A"} {row.modelName || row.stockId}</div>
                      <div className="text-xs text-gray-500">ID: {row.stockId}</div>
                    </td>
                    <td className="p-3 text-gray-600">
                      <div>{row.color ? `Color: ${row.color}` : "No color"}</div>
                      <div>
                        {row.ram || row.rom ? `${row.ram ?? ""}${row.ram && row.rom ? "/" : ""}${row.rom ?? ""}` : ""}
                        {row.ram || row.rom ? " " : ""}
                        {row.type === "android" ? "IMEI based item" : "Quantity based item"}
                      </div>
                    </td>
                    <td className="p-3 text-right font-semibold text-gray-800">{row.availableQuantity.toLocaleString()}</td>
                    <td className="p-3 text-right text-gray-600">{formatCurrency(row.purchasePrice)}</td>
                    <td className="p-3 text-right text-gray-600">{formatCurrency(row.sellingPrice)}</td>
                    <td className="p-3 text-right font-semibold text-gray-800">
                      {formatCurrency(row.availableQuantity * row.sellingPrice)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-4 text-gray-500" colSpan={7}>
                    No available stock found for this date.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
