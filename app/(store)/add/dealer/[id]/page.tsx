import { getDealerById } from '@/actions/dealer'
import DealerEdit from '@/block/add/dealer/edit'

export const revalidate = 0

type Props = { params: Promise<{ id: string }> }

export default async function Page(props: Props) {
  try {
    const params = await props.params
    const dealer = await getDealerById(params.id as string)

    return <DealerEdit dealer={dealer} />
  } catch (error) {
    console.error(error)
  }
}
