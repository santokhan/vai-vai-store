// NumberInput.tsx
import React, { ChangeEvent, ChangeEventHandler, FC } from 'react';

interface NumberInputProps {
    label: string;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    name: string;
    value: string;
}

const NumberInput: FC<NumberInputProps> = ({ label, name, id, onChange, required, value }) => {
    return (
        <div className="w-full">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-textgray"
            >
                {label}
            </label>
            <input
                type="number"
                id={id}
                name={name}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="0"
                required={required}
                value={value}
            />
        </div>
    );
};

export default NumberInput;
