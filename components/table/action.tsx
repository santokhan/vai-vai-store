import { ORIGIN } from "@/utils/origin";
import { OnlyChildrenProps } from "@/utils/props-type";
import { Trash } from "iconsax-react";
import { FC } from "react";

export const ActionDelete = ({ handleClick }: any) => {
    return (
        <button onClick={handleClick} className='hover:text-red-600' >
            <Trash className='w-4 h-4' />
        </button>
    )
};

const Actions: FC<OnlyChildrenProps> = ({ children }) => (
    <div className="flex items-center justify-center gap-2">{children}</div>
)

export default Actions;