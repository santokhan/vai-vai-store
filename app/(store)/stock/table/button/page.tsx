'use server';

import { getRole } from "@/actions/user/role";
import { BtnIncBM, getButtonMany } from "@/actions/stock/button/get";
import StockButtonTable from "@/block/add/stock/table/button";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";

export default async function StockButtonTablePage() {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const role = email ? await getRole(email) : undefined;
    const canDelete = role === "super-admin";
    const stockButton: BtnIncBM[] | undefined = await getButtonMany();

    return (
        Array.isArray(stockButton) && <StockButtonTable stockButton={stockButton} canDelete={canDelete} />
    )
}

