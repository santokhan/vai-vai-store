'use server';

import { TotalSummary } from './_summary'
import { ProductSummary } from './_product-summary'
import { ASalesToday } from '@/block/dashboard/SalesToday';
import { anroidSalesToday } from '@/actions/sales/today/android';

export default async function Dashboard() {
    // const data = await anroidSalesToday();

    return (
        <div className='space-y-6'>
            <TotalSummary />
            <ProductSummary />
            <div className="w-full space-y-16 p-4">
                {/* <AreaChart /> */}
                {/* <BarChart /> */}
            </div>
            {/* {data && <ASalesToday data={data} />} */}
        </div>
    )
}