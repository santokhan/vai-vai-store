import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Add any additional props you may need
    variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    const classes: Record<string, string> = {
        "primary": "bg-blue-500 hover:bg-blue-600 text-white",
        "secondary": "bg-gray-100 hover:bg-gray-50 text-gray-800",
        "danger": "bg-blue-500 hover:bg-blue-600 text-white",
    }

    return (
        <button
            className={`rounded-lg px-4 py-2.5 font-medium flex items-center gap-1 capitalize text-sm ${classes[variant]}`} // assuming you have CSS classes for different variants
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
