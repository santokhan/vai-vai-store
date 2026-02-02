import { getDealerById } from '@/actions/dealer'
import DealerEdit from '@/block/add/dealer/edit'

export const revalidate = 0

interface Props {
    params: Promise<{ id: string }>
}

export default async function Page(props: Props) {
    try {
        const params = await props.params
        const dealer = await getDealerById(params.id)

        if (!dealer) {
            return <div>Dealer not found</div>
        }
        return <DealerEdit dealer={dealer} />
    } catch (error) {
        console.error('Error fetching dealers:', error)
    }
}