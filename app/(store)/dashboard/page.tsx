import { AreaChart } from '@/block/chart/area-chart'
import { BarChart } from '@/block/chart/bar-chart'

export default function Dashboard() {
    return (
        <div>
            <div className="w-full space-y-16 p-4">
                <AreaChart />
                <BarChart />
            </div>
        </div>
    )
}