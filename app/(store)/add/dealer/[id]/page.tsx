import { getDealerById } from '@/actions/dealer'
import DealerEdit from '@/block/add/dealer/edit'

export const revalidate = 0

export default async function Page ({ params }) {
  try {
    params = await params
    const dealer = await getDealerById(params.id as string)

    return <DealerEdit dealer={dealer} />
  } catch (error) {
    console.error('Error fetching dealers:', error)
  }
}
