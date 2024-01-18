'use client'

import SubmitButton from "@/components/form/submit";
import { trim_input } from "@/utils/trim-input";
import { FormEvent } from "react";

export default function TypePage() {
    async function postType(type: string) {
        if (!type) {
            console.log("Can not read undeifined type")
            return;
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add/type/`, {
            method: 'POST',
            body: JSON.stringify({
                type: type
            })
        });
        const data = await response.json();
        console.log(data);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // <input name="type"/>
        const type = formData.get('type');
        if (typeof type == 'string') {
            await postType(trim_input(type));
        }
    }

    return (
        <div className="">
            <form className="bg-white p-6 rounded-xl space-y-6 max-w-xl" onSubmit={handleSubmit}>
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-full">
                        <label htmlFor="type" className="default">Add Product Type or Category</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            className="default"
                            placeholder="Samsung"
                            required
                        />
                    </div>
                </div>
                <SubmitButton>add</SubmitButton>
            </form>
        </div>
    )
}