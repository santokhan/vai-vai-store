// SubmitButton.tsx
import React, { FC } from 'react';

interface SubmitButtonProps {
    // onClick: () => void; // Define the onClick function type as needed
}

const SubmitButton: FC<SubmitButtonProps> = ({ }) => {
    return (
        <button
            type="submit"
            className="text-white bg-indigo-500 hover:brightness-90 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
            Submit
        </button>
    );
};

export default SubmitButton;
