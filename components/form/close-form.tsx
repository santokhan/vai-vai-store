import { CloseCircle } from "iconsax-react";
import { FC } from "react";

const CloseForm: FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
        type="button"
        className="text-gray-700 hover:text-gray-500"
        onClick={onClick}
    ><CloseCircle className="w-5 h-5" /></button>
);

export default CloseForm;