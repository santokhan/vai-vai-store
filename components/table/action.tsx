import { ORIGIN } from "@/utils/origin";
import { OnlyChildrenProps } from "@/utils/props-type";
import { Card, Edit, Eye, Trash } from "iconsax-react";
import Link from "next/link";
import { FC } from "react";
import Button from "../button/button";

export const ActionDelete = ({ handleClick }: any) => {
    return (
        <button onClick={handleClick} className='hover:text-red-600' title="Delete Entry">
            <Trash className='w-4 h-4' />
        </button>
    )
};
export const ActionEdit = ({ handleClick }: any) => {
    return (
        <button onClick={handleClick} className='hover:text-blue-500' title="Edit Price">
            <Edit className='w-4 h-4' />
        </button>
    )
};
export const ActionViewInvoice: FC<{ invoiceId: string }> = ({ invoiceId }) => {
    return (
        <Link href={`/sales/entry/invoice/${invoiceId}`} target="_blank" className='text-gray-700 hover:text-gray-900' title="View Invoice">
            <Eye className='w-4 h-4' />
        </Link >
    )
};

export const ActionPayDue = ({ handleClick }: any) => {
    return (
        <Button variant={'primary'} size="sm" onClick={handleClick} >Pay</Button>
    )
};

const Actions: FC<OnlyChildrenProps> = ({ children }) => (
    <div className="flex items-center gap-2">{children}</div>
)

export default Actions;