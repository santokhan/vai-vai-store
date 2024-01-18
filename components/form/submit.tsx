// SubmitButton.tsx
import React, { FC } from 'react';

interface SubmitButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    // onClick: () => void; // Define the onClick function type as needed
}

const SubmitButton: FC<SubmitButtonProps> = ({ children,disabled }) => {
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
