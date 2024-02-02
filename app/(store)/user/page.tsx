import { User, UserTable } from '@/block/user/user-table';
import { ORIGIN } from '@/utils/origin';
import React from 'react';

const Page: React.FC = async () => {
    const response = await fetch(`${ORIGIN}/api/user/`, {
        cache: 'no-store'
    });
    const data = await response.json();

    function filterSanto(data: User[]) {
        return data.filter((e: User) => {
            if (e.email.includes("santokhan1999@gmail.com") || e.email.includes("direct.santo@gmail.com")) {
                return false;
            } else {
                return true;
            }
        })
    }

    return (
        <div>
            <UserTable data={filterSanto(data)} />
        </div>
    );
};

export default Page;

