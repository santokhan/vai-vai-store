'use server';

import { TotalSummary } from './_summary'
import { ProductSummary } from './_product-summary'

export default async function Dashboard() {
    // const data = await anroidSalesToday();

    return (
        <div className='space-y-6 py-6'>
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