'use server';

import { getAllUser } from '@/actions/user/role';
import { User, UserTable } from '@/block/user/user-table';
import { AddUserServerComp } from './_add-user';

export default async function Page() {
    const users = await getAllUser();

    function filterSanto(data: User[]) {
        return data.filter((e: User) => {
            if (e.email.includes("santokhan1999@gmail.com") || e.email.includes("inbox.santo@gmail.com")) {
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
        <div className='flex flex-wrap gap-4 items-start'>
            <AddUserServerComp />
            <UserTable data={filterSanto(users)} />
        </div>
    );
};


