import { FC } from 'react';

export interface SellerSelectProps {
    labelName: string;
    defaultOptionName: string;
    onChange: (value: string) => void;
    options: string[];
}

const SelectOption: FC<SellerSelectProps> = ({ onChange, defaultOptionName, labelName, options }) => {
    return (
        <div className='w-full'>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 capitalize">{labelName || 'label'}</label>
            <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                onChange={(e) => onChange(e.target.value)}
            >
                <option> {defaultOptionName || 'Choose'} </option>
                {options.map((option, idx) => (
                    <option className='capitalize' value={option} key={idx}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectOption;
