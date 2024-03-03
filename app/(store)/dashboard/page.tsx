import { AreaChart } from '@/block/chart/area-chart'
import { BarChart } from '@/block/chart/bar-chart'
import { TotalSummary } from './_summary'
import { ProductSummary } from './_product-summary'

export default function Dashboard() {
    return (
        <div className='space-y-6'>
            <TotalSummary />
            <ProductSummary />
            <div className="w-full space-y-16 p-4">
                {/* <AreaChart /> */}
                {/* <BarChart /> */}
            </div>
        </div>
    )
}