'use server';

import { getRole } from "@/actions/user/role";
import AddNewUser from "@/block/user/add-user";
import { getServerSession } from "next-auth";


export async function AddUserServerComp() {
    const session = await getServerSession();
    const email = session?.user?.email
    if (email) {
        const role = await getRole(email);
        if (role == 'super-admin') {
            return <AddNewUser />
        }
    }
}