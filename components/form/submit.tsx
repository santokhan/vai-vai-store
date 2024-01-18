// SubmitButton.tsx
import React, { FC } from 'react';

interface SubmitButtonProps {
    children: React.ReactNode;
    // onClick: () => void; // Define the onClick function type as needed
}

const SubmitButton: FC<SubmitButtonProps> = ({ children }) => {
    return (
        <button
            type="submit"
            className="default"
        >
            {children || 'Submit'}
        </button>
    );
};

export default SubmitButton;
