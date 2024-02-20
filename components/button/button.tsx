import React, { ButtonHTMLAttributes } from 'react';

// Define variant types
type ButtonVariant = 'primary' | 'secondary' | 'danger';

// Define ButtonProps interface extending ButtonHTMLAttributes and adding variant
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

// Define classNames for different variants
const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    danger: 'bg-red-500 hover:bg-red-600 text-white', // Modified 'danger' variant class
};

// Button component
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    // Generate className based on variant
    const variantClass = variantClasses[variant] || variantClasses['primary']; // fallback to primary if variant not found

    return (
        <button
            className={`rounded-lg px-4 py-2.5 font-medium inline-flex items-center gap-1 capitalize text-sm disabled:bg-gray-200 ${variantClass}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
