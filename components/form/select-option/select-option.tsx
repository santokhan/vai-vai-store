import { ChangeEvent, FC } from 'react'
import InputBox from '../input-box'

export interface SellerSelectProps {
  labelName: string
  name: string
  defaultOptionName: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: any[]
  required?: boolean
  value: string
  className?: string
}

const SelectOption: FC<SellerSelectProps> = ({
  onChange,
  defaultOptionName,
  labelName,
  options,
  required,
  value,
  name,
  className
}) => {
  return (
    <InputBox>
      <label htmlFor='category' className='default'>
        {labelName}
      </label>
      <select
        id='category'
        name={name}
        onChange={onChange}
        required={required}
        value={value}
        className={['default', className].join(' ')}
      >
        <option value='' disabled>
          {defaultOptionName}
        </option>
        {options.map((option, idx) =>
          option?.value ? (
            <option className='capitalize' value={option?.value} key={idx}>
              {option?.label}
            </option>
          ) : (
            <option className='capitalize' value={option} key={idx}>
              {option}
            </option>
          )
        )}
      </select>
    </InputBox>
  )
}

export default SelectOption
