'use client';

import { insertNewUser } from '@/actions/user/role';
import InputBox from '@/components/form/input-box';
import SelectOption from '@/components/form/select-option/select-option';
import FormTitle from '@/components/form/title';
import { roles } from '@/utils/role';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';

const AddNewUser: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [adding, setadding] = useState<boolean>(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setadding(true);
        if (email && role) {
            try {
                const res = await insertNewUser(email, role);
                setadding(false);
                setEmail("");
                setRole("");
                res && toast(res.message);
            } catch (error) {
                throw error;
            }
        }
    };

    return (
        <div className="w-full max-w-lg">
            <form className="bg-white p-6 rounded-xl space-y-4" onSubmit={handleSubmit}>
                <FormTitle>Add New User</FormTitle>
                <div className="space-y-6">
                    <InputBox>
                        <label htmlFor="email" className="default">Email</label>
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
                    <InputBox>
                        <SelectOption
                            name='role'
                            labelName='User Role'
                            options={roles}
                            required
                            onChange={handleRoleChange}
                            value={role}
                            defaultOptionName='Choose User Role'
                        />
                    </InputBox>
                    <button className="default" disabled={adding}>{adding ? "..." : "add"}</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewUser;
