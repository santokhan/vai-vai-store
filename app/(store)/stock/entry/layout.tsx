import ProductTypeTabs from "@/components/tab/product-type-tabs";
import { OnlyChildrenProps } from "@/utils/props-type";

export default function LayoutStockEntry({ children }: OnlyChildrenProps) {
    return (
        <>
            <ProductTypeTabs pathPrefix="/stock/entry" />
            {children}
        </>
    )
}