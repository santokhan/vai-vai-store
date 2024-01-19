import DashboardImage from '@/assets/images/overview-2.png'
import Image from 'next/image'

export default function Dashboard() {
    return (
        <div>
            <Image src={DashboardImage} alt="Dashboard" className="w-full" />
        </div>
    )
}