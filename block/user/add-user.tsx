'use client';

import { insertNewUser } from '@/actions/user/role';
import InputBox from '@/components/form/input-box';
import FormTitle from '@/components/form/title';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';

const AddNewUser: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [adding, setadding] = useState<boolean>(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setadding(true);
        const message = await insertNewUser('email.com', 'admin');
        setadding(true);
    };

    return (
        <div className="w-full max-w-lg">
            <form className="bg-white p-6 rounded-xl space-y-4" onSubmit={handleSubmit}>
                <FormTitle>Add New User</FormTitle>
                <div className=" space-y-6">
                    <InputBox>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="default"
                            placeholder="somone@gmail.com"
                            required
                            onChange={handleEmailChange}
                        />
                    </InputBox>
                    <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewUser;
