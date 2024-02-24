'use client';

import { submitShopRentalForm } from "@/actions/expenses/expenses";
import InputBox from "@/components/form/input-box";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "react-toastify";


export default function Page() {
    const [res, formAction] = useFormState(submitShopRentalForm, null);
    const { pending } = useFormStatus();

    return (
        <div className="">
            <form className="max-w-xl bg-white p-6 flex flex-col items-start gap-6 rounded-xl" action={formAction}>
                <InputBox>
                    <label htmlFor="amount" className="default">Cost</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="default"
                        placeholder="0"
                        required
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor="comment" className="default">Comment</label>
                    <textarea
                        id="comment"
                        name="comment"
                        className="default"
                        placeholder="Enter comment about the cost"
                        rows={5}
                    />
                </InputBox>
                {res?.message}
                <button className="default">{pending ? 'adding...' : 'add'}</button>
            </form>
        </div>
    )
}