import { InStock, Model } from "@/prisma/generated/client";
import productCardImg from '@/assets/images/product-card.png';
import Image from "next/image";

export type SearchProductCardType = InStock & { model: Model };

export default function SearchProductCard({ data }: { data: InStock | null }) {
    if (!data) return null;
    const { IMEI, name, price, sold, color, ram, rom } = data;

    return (
        <div className="space-y-2">
            <div className="text-lg font-medium">Product Details</div>
            <div className="flex items-start border rounded-lg max-w-md overflow-hidden">
                <Image src={productCardImg} alt='p' className="!w-[192px] lg:w-[292px] h-full object-cover" />
                <div className="w-full">
                    <table className="w-full text-left text-sm font-medium text-gray-900 rtl:text-right">
                        <thead>
                            <tr>
                                <th className='px-3 py-2 bg-gray-100'>Key</th>
                                <th className='px-3 py-2 bg-gray-100'>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="whitespace-nowrap px-3 py-2 capitalize">name</td>
                                <td className="px-3 py-2 capitalize">{name}</td>
                            </tr>
                            <tr className="">
                                <td className="whitespace-nowrap px-3 py-2 capitalize">price</td>
                                <td className="px-3 py-2">{price}</td>
                            </tr>
                            <tr className="">
                                <td className="whitespace-nowrap px-3 py-2 capitalize">color</td>
                                <td className="px-3 py-2 capitalize">{color}</td>
                            </tr>
                            <tr className="">
                                <td className="whitespace-nowrap px-3 py-2 capitalize">RAM/ROM</td>
                                <td className="px-3 py-2">{ram}/{rom}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}