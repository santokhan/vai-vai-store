import { productTypes } from "@/utils/product-type";
import Link from "next/link";

export default function ProductTypeTabs({ pathPrefix }: { pathPrefix: string }) {
    return (
        <div className="tabs">
            {productTypes.map((type, i) => (
                <Link className="tab inline-block" href={`${pathPrefix}/${type}`} key={i}>
                    {type}
                </Link>
            ))}
        </div>
    );
}
