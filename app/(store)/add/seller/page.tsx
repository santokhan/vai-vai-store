'use client'

import SubmitButton from "@/components/form/submit";
import { trim_input } from "@/utils/trim-input";
import { FormEvent } from "react";

export default function TypePage() {
    async function postSeller(name: string) {
        if (!name) {
            console.log("Can not read undeifined type")
            return;
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add/seller`, {
            method: 'POST',
            body: JSON.stringify({
                name: name
            })
        });
        const data = await response.json();
        console.log(data);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // <input name="type"/>
        const seller = formData.get('seller');
        if (typeof seller == 'string') {
            await postSeller(trim_input(seller));
        }
    }

    return (
        <div className="">
            <form className="bg-white p-6 rounded-xl space-y-6 max-w-xl" onSubmit={handleSubmit}>
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-full">
                        <label htmlFor="seller" className="default">Seller</label>
                        <input
                            type="text"
                            id="seller"
                            name="seller"
                            className="default"
                            placeholder="Store 1"
                            required
                        />
                    </div>
                </div>
                <SubmitButton>add</SubmitButton>
            </form>
        </div>
    )
}