'use server';

import { getRole } from "@/actions/user/role";
import { StockAndroidInclude, getStockAndroidMany } from "@/actions/stock/get";
import StockAndroidTable from "@/block/add/stock/table/android";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";

export default async function StockAndroidTablePage({ searchParams }: { searchParams: { stockId?: string } }) {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const role = email ? await getRole(email) : undefined;
    const canDelete = role === "super-admin";
    const stockAndroid: StockAndroidInclude[] | undefined = await getStockAndroidMany();
    const visibleStock = searchParams.stockId
        ? stockAndroid?.filter((item) => item.id === searchParams.stockId)
        : stockAndroid;

    return (
        Array.isArray(visibleStock) && <StockAndroidTable stockAndroid={visibleStock} canDelete={canDelete} />
    )
}


