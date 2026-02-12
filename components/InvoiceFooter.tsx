'use client'

import { toDataURL } from "qrcode";
import { useEffect, useState } from "react";

interface Props {
    salesId: string
}

const InvoiceFooter = ({ salesId }: Props) => {
    const [blobURL, setBlobURL] = useState("");

    useEffect(() => {
        if (salesId) {
            const url = window.location.origin + `/sales/entry/invoice/${salesId}/v2`
            toDataURL(url).then(url => {
                setBlobURL(url)
            }).catch(console.error)
        }
    }, [salesId])

    return (
        <div className="mt-4 flex items-end">
            {blobURL &&
                <img src={blobURL} className="size-24" />
            }
            <div className="ml-auto w-60 text-center">
                <p className='border-t-2 text-sm'>Signature</p>
            </div>
        </div>
    )
}

export default InvoiceFooter