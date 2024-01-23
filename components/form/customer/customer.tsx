import React, { ChangeEvent } from 'react';

export type Props = {
    setCustomerData: (key: string, value: string) => void
}

const CustomerForm = ({ setCustomerData }: Props) => {
    return (
        <div>
            <div className="">
                <div className="py-2 mb-2 border-b text-lg font-medium">Customer Information</div>
                <div className='w-full space-y-6'>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        <div className="w-full">
                            <label htmlFor="name" className="default">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="default"
                                placeholder="Santo"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setCustomerData('name', e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        <div className="w-full">
                            <label htmlFor="email" className="default">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="default"
                                placeholder="direct.santo@gmail.com"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setCustomerData('email', e.target.value) }}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="phone" className="default">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                className="default"
                                placeholder="01307 230 077"
                                required={true}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setCustomerData('phone', e.target.value) }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="default">Note</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="default"
                            placeholder="Write your thoughts here..."
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setCustomerData('message', e.target.value) }}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerForm;
