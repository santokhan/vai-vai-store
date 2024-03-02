import FormContainer from '@/components/form-container';
import React, { ChangeEvent } from 'react';
import FormTitle from '../title';
import InputBox from '../input-box';
import { useCustomerContext } from '@/context/customer-context';

const CustomerForm = () => {
    const { setCustomerData } = useCustomerContext()

    return (
        <FormContainer>
            <FormTitle>Customer Information</FormTitle>
            <div className='w-full gap-4 grid grid-cols-1 sm:grid-cols-2'>
                <InputBox>
                    <label htmlFor="name" className="default">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="default"
                        placeholder="Santo"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setCustomerData('name', e.target.value) }}
                    />
                </InputBox>
                {/* <InputBox>
                        <label htmlFor="email" className="default">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="default"
                            placeholder="direct.santo@gmail.com"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setCustomerData('email', e.target.value) }}
                        />
                    </InputBox> */}
                <InputBox>
                    <label htmlFor="phone" className="default">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        className="default"
                        placeholder="01307 230 077"
                        required={true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setCustomerData('phone', e.target.value) }}
                    />
                </InputBox>
            </div>
        </FormContainer>
    );
};

export default CustomerForm;
