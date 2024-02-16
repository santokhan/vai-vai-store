import { Brand, Model, StockAndroid } from "@/prisma/generated/client";

interface ExtendStockAndroid extends StockAndroid {
    brand?: Brand,
    model?: Model
}

interface Props {
    stockAndroid: ExtendStockAndroid | null;
};

const SearchProductCard: React.FC<Props> = ({ stockAndroid }: Props) => {
    if (!stockAndroid) return null;
    const dtddClasses = 'px-3 py-2 capitalize';

    return (
        <div className="border rounded-lg max-w-md overflow-x-auto">
            <h5 className="px-3 py-2 bg-gray-100 font-medium">Android Specifications</h5>
            <dl className="grid grid-cols-2 max-w-md divide-y text-sm">
                <dt className={dtddClasses}>Brand</dt><dd className={dtddClasses}>{stockAndroid.brand?.brandName}</dd>
                <dt className={dtddClasses}>Model</dt><dd className={dtddClasses}>{stockAndroid.model?.model}</dd>
                <dt className={dtddClasses}>IMEI</dt><dd className={dtddClasses}>{stockAndroid.IMEI}</dd>
                <dt className={dtddClasses}>Name</dt><dd className={dtddClasses}>{stockAndroid.name}</dd>
                <dt className={dtddClasses}>Selling Price</dt><dd className={dtddClasses}>{stockAndroid.sellingPrice}</dd>
                <dt className={dtddClasses}>Color</dt><dd className={dtddClasses}>{stockAndroid.color}</dd>
                <dt className={dtddClasses}>Ram/Rom</dt><dd className={dtddClasses}>{stockAndroid.ram}/{stockAndroid.rom}</dd>
            </dl>
            {/* <table className="w-full text-sm font-medium text-gray-900">
                <thead>
                    <tr>
                        <th className='px-3 py-2 bg-gray-100'>Brand</th>
                        <th className='px-3 py-2 bg-gray-100'>Model</th>
                        <th className='px-3 py-2 bg-gray-100'>IMEI</th>
                        <th className='px-3 py-2 bg-gray-100'>Name</th>
                        <th className='px-3 py-2 bg-gray-100'>Selling Price</th>
                        <th className='px-3 py-2 bg-gray-100'>Color</th>
                        <th className='px-3 py-2 bg-gray-100'>Ram/Rom</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stockAndroid.IMEI &&
                        <tr>
                            <td className="whitespace-nowrap px-3 py-2 capitalize">{stockAndroid.brand?.brandName}</td>
                            <td className="whitespace-nowrap px-3 py-2 capitalize">{stockAndroid.model?.model}</td>
                            <td className="whitespace-nowrap px-3 py-2 capitalize">{stockAndroid.IMEI}</td>
                            <td className="whitespace-nowrap px-3 py-2 capitalize">{stockAndroid.name}</td>
                            <td className="whitespace-nowrap px-3 py-2 capitalize">{stockAndroid.sellingPrice}</td>
                            <td className="whitespace-nowrap px-3 py-2 capitalize">{stockAndroid.color}</td>
                            <td className="whitespace-nowrap px-3 py-2 capitalize">{stockAndroid.ram}/{stockAndroid.rom}</td>
                        </tr>
                    }
                </tbody>
            </table> */}
        </div>
    );
};

export default SearchProductCard;
