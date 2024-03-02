import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode; // ReactNode type accepts any JSX expression as children
    className?: string; // optional className
    labelName?: string; // optional className
    htmlFor?: string; // optional className
}

const InputBox: React.FC<ContainerProps> = ({ children, className, labelName, htmlFor }) => {
    return (
        <div className={`w-full ${className}`}>
            {labelName && htmlFor && <label htmlFor={htmlFor} className="default">{labelName}</label>}
            {children}
        </div>
    );
};

export default InputBox;
