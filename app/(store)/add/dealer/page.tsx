import { getDealers } from '@/actions/dealer'
import DealerFormWithTable from '@/block/add/dealer'

export const revalidate = 0

export default async function TypePage () {
  try {
    const dealers = await getDealers()

    return <DealerFormWithTable dealers={dealers} />
  } catch (error) {
    console.error('Error fetching dealers:', error)
  }
}
