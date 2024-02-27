'use client';

import { FC, useEffect, useState } from "react";
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

    return (
        <div>
            {
                stock ?
                    <>
                        <h4 className="capitalize font-semibold">{stock.brand.brandName} {stock.model.model}</h4>
                        <div className="capitalize">Quantity: {data.quantity}</div>
                        {stock.color && <div className="capitalize">Color: {stock.color}</div>}
                        {/* <pre>{JSON.stringify(stock, null, 2)}</pre> */}
                    </>
                    : "Not exist on stock"
            }
        </div>
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
                    {entity.map((e, i) => <Details key={i} data={e} />)}
                </div>
                :
                <Button size="sm" onClick={expandDetails}>View Details</Button>
        )
    } else {
        return null;
    }

}
