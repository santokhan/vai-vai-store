import { StockAndroid } from "@/prisma/generated/client";
import productCardImg from '@/assets/images/product-card.png';
import Image from "next/image";
import { Fragment } from "react";

type Props = {
    stockAndroid: StockAndroid | null;
};

const keys: Array<keyof StockAndroid> = ['name', 'sellingPrice', 'IMEI', 'color'];

const SearchProductCard: React.FC<Props> = ({ stockAndroid }: Props) => {
    if (!stockAndroid) return null;

    return (
        <div className="flex items-start border rounded-lg max-w-md overflow-hidden">
            <Image src={productCardImg} alt='p' className="!w-[192px] lg:w-[292px] h-full object-cover" />
            <table className="text-sm font-medium text-gray-900">
                <thead>
                    <tr>
                        <th className='px-3 py-2 bg-gray-100' colSpan={2}>Android Specifications</th>
                    </tr>
                </thead>
                <tbody>
                    {keys.map((key: keyof StockAndroid, i) => (
                        <Fragment key={i}>
                            {
                                stockAndroid[key] &&
                                <tr>
                                    <td className="whitespace-nowrap px-3 py-2 capitalize">{key}</td>
                                    <td className="whitespace-nowrap px-3 py-2 capitalize">{(stockAndroid as Record<keyof StockAndroid, any>)[key]}</td>
                                </tr>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchProductCard;
