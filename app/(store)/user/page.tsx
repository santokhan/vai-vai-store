'use server';

import { getAllUser } from '@/actions/user/role';
import AddNewUser from '@/block/user/add-user';
import { User, UserTable } from '@/block/user/user-table';
import React from 'react';

const Page: React.FC = async () => {
    const users = await getAllUser();

    function filterSanto(data: User[]) {
        return data.filter((e: User) => {
            if (e.email.includes("santokhan1999@gmail.com") || e.email.includes("direct.santo@gmail.com")) {
                return false;
            } else {
                return true;
            }
        })
    }

    if (!users) {
        return null;
    }

    return (
        <div className='flex flex-wrap gap-4'>
            <UserTable data={filterSanto(users)} />
            <AddNewUser />
        </div>
    );
};

export default Page;

