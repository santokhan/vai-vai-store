import ReactQueryContext from "@/context/react-query-context";
import { OnlyChildrenProps } from "@/utils/props-type";

export default function LayoutStockEntry({ children }: OnlyChildrenProps) {
    return (
        <ReactQueryContext>
            {children}
        </ReactQueryContext>
    )
}