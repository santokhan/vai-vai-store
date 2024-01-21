// NumberInput.tsx
import React, { ChangeEvent, ChangeEventHandler, FC } from 'react';

interface NumberInputProps {
    label: string;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    name: string;
    value: number;
}

const NumberInput: FC<NumberInputProps> = ({ label, name, id, onChange, required, value }) => {
    return (
        <div className="w-full">
            <label
                htmlFor={id}
                className="default"
            >
                {label}
            </label>
            <input
                type="number"
                id={id}
                name={name}
                onChange={onChange}
                className="default"
                placeholder="0"
                required={required}
                value={value}
            />
        </div>
    );
};

export default NumberInput;
