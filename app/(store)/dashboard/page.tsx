import { AreaChart } from '@/block/chart/area-chart'
import { BarChart } from '@/block/chart/bar-chart'
import { TotalSummary } from './_summary'

export default function Dashboard() {
    return (
        <div>
            <TotalSummary />
            <div className="w-full space-y-16 p-4">
                {/* <AreaChart /> */}
                {/* <BarChart /> */}
            </div>
        </div>
    )
}