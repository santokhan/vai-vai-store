import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode; // ReactNode type accepts any JSX expression as children
    className?: string; // optional className
}

const InputBox: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`w-full ${className}`}>
            {children}
        </div>
    );
};

export default InputBox;
