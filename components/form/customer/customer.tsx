import React from 'react';
import SubmitButton from '../submit';

const CustomerForm: React.FC = () => {
    return (
        <div>
            <div className="">
                <div className="py-2 mb-3 border-b">Customer Information</div>
                <div className='w-full space-y-6'>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        <div className="w-full">
                            <label
                                htmlFor="firstName"
                                className="block mb-2 text-sm font-medium text-textgray"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Santo"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-textgray"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="direct.santo@gmail.com"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-textgray"
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="01307 230 077"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-textgray"
                        >
                            Note
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-full mt-8">
                {/* <SubmitButton /> */}
            </div>
        </div>
    );
};

export default CustomerForm;
