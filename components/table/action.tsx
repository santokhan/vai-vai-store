import { ORIGIN } from "@/utils/origin";
import { OnlyChildrenProps } from "@/utils/props-type";
import { Eye, Trash } from "iconsax-react";
import Link from "next/link";
import { FC } from "react";

export const ActionDelete = ({ handleClick }: any) => {
    return (
        <button onClick={handleClick} className='hover:text-red-600' >
            <Trash className='w-4 h-4' />
        </button>
    )
};
export const ActionViewInvoice: FC<{ invoiceId: string }> = ({ invoiceId }) => {
    return (
        <Link href={`/sales/entry/invoice/${invoiceId}`} target="_blank" className='text-gray-700 hover:text-gray-900' title="View Invoice">
            <Eye className='w-4 h-4' />
        </Link>
    )
};

const Actions: FC<OnlyChildrenProps> = ({ children }) => (
    <div className="flex items-center gap-2">{children}</div>
)

export default Actions;