'use client';

import { FC, Fragment, useEffect, useState } from "react";
import { JsonValue } from "@/prisma/generated/client/runtime/library";
import { ORIGIN } from "@/utils/origin";
import Button from "@/components/button/button";

const Details: FC<{ data: any }> = ({ data }) => {
    const [stock, setstock] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const { type, stockId } = data;

            if (type && stockId) {
                fetch(`${ORIGIN}/api/sales/table/stock/`, {
                    method: "POST",
                    body: JSON.stringify({ type, stockId })
                }).then(res => res.json()).then(stock => {
                    if (stock.id) {
                        setstock(stock);
                    }
                    setLoading(false);
                });
            }
        }

        getData();
        // const timeout = setTimeout(() => {
        //     getData();
        //     clearTimeout(timeout)
        // }, 1000);
    }, [data])

    if (loading) {
        return "Loading..."
    }

    if (!stock) {
        return "Not exist on stock"
    }

    const list = [
        `${stock.brand.brandName} ${stock.model.model}`,
        ["Color", stock.color],
        stock.IMEI && ["IMEI", stock.IMEI],
        data.quantity && ["Quantity", data.quantity],
        stock.ram && stock.rom && ["RAM/ROM", stock.ram + '/' + stock.rom],
        ["Price", data.price],
    ].filter(e => e)

    return (
        list.map((e, i) =>
            <Fragment key={i}>
                {typeof e === "string" ? <h4 className="font-semibold">{e}</h4> : <div>{e[0]}: {e[1]}</div>}
            </Fragment>
        )
    )
}

export const ProductDetails: FC<{ entity: JsonValue }> = ({ entity }) => {
    const [viewDetails, setviewDetails] = useState(false);

    function expandDetails() {
        setviewDetails(true);
    }

    if (Array.isArray(entity)) {
        return (
            viewDetails ?
                <div className="space-y-6">
                    {entity.map((e, i) =>
                        <div key={i} className="capitalize"><Details data={e} /></div>
                    )}
                </div>
                :
                <Button size="sm" onClick={expandDetails}>View Details</Button>
        )
    } else {
        return null;
    }

}
