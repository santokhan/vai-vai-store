import { ChangeEvent, FC } from 'react';

export interface SellerSelectProps {
    labelName: string;
    name: string;
    defaultOptionName: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: any[];
    required?: boolean;
    value: string;
}

const SelectOption: FC<SellerSelectProps> = ({ onChange, defaultOptionName, labelName, options, required, value, name }) => {
    return (
        <div className='w-full'>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 capitalize">{labelName || 'label'}</label>
            <select id="category" name={name} onChange={onChange} required={required} value={value} className="default">
                <option value="" disabled>{defaultOptionName} </option>
                {options.map((option, idx) => (
                    <option className='capitalize' value={option} key={idx}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectOption;
