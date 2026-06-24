'use client'

import { useRouter } from "next/navigation";

const DateSelector = ({ date }: { date: string }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <input
        type="date"
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={new Date(date).toISOString().split("T")[0]}
        max={new Date().toISOString().split("T")[0]}
        onChange={(e) => {
          router.push(`/report/stock?date=${e.target.value}`);
        }}
      />
    </div>
  );
};

export default DateSelector;
