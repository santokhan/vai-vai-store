'use server';

import { getRole } from "@/actions/user/role";
import { AccIncBM, getAccessoriesMany } from "@/actions/stock/accessories/get";
import StockTableAccessories from "@/block/add/stock/table/accessories";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";

export default async function StockButtonTablePage({ searchParams }: { searchParams: { stockId?: string } }) {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const role = email ? await getRole(email) : undefined;
    const canDelete = role === "super-admin";
    const stockAccessories: AccIncBM[] | undefined = await getAccessoriesMany();
    const visibleStock = searchParams.stockId
        ? stockAccessories?.filter((item) => item.id === searchParams.stockId)
        : stockAccessories;

    return (
        Array.isArray(visibleStock) && <StockTableAccessories stockAccessories={visibleStock} canDelete={canDelete} />
    )
}

