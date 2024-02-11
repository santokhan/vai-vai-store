import ProductTypeTabs from "@/components/tab/product-type-tabs";
import { OnlyChildrenProps } from "@/utils/props-type";

export default function LayoutStockEntry({ children }: OnlyChildrenProps) {
    return (
        <div className='space-y-4'>
            <ProductTypeTabs pathPrefix="/stock/table" />
            {children}
        </div>
    )
}