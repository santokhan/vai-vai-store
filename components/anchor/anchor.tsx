import Link from 'next/link';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

// Define variant types
type ButtonVariant = 'primary' | 'secondary' | 'danger';

// Define ButtonProps interface extending ButtonHTMLAttributes and adding variant
interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
}

// Define classNames for different variants
const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    danger: 'bg-red-500 hover:bg-red-600 text-white', // Modified 'danger' variant class
};

// Button component
const Anchor: React.FC<ButtonProps> = ({ children, variant = 'primary', href = "", ...props }) => {
    // Generate className based on variant
    const variantClass = variantClasses[variant] || variantClasses['primary']; // fallback to primary if variant not found

    return (
        <Link
            href={href}
            className={`rounded-lg px-4 py-2.5 font-medium flex items-center gap-1 capitalize text-sm ${variantClass}`}
            {...props}
        >
            {children}
        </Link>
    );
};

export default Anchor;
