'use client'

import { phoneNumbers } from "@/utils/company-details";
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
        <>
            <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Thank you!</h4>
                <p className="text-gray-500">
                    If you have any questions concerning this invoice, use the following contact information:
                </p>
                <div className="mt-2">
                    <p className="block text-sm font-medium text-gray-800">
                        Phone: {phoneNumbers.join(", ")}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex items-end">
                {blobURL &&
                    <img src={blobURL} className="size-24" />
                }
                <div className="ml-auto w-60 text-center">
                    <p className='border-t-2 text-sm'>Signature</p>
                </div>
            </div>
        </>
    )
}

export default InvoiceFooter