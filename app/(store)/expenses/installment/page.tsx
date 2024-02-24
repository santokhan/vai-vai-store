'use client';

import { submitInstallmentForm } from "@/actions/expenses/expenses";
import InputBox from "@/components/form/input-box";
import { useFormState } from "react-dom";


export default function Page() {
    const [state, formAction] = useFormState(submitInstallmentForm, null);

    return (
        <div className="">
            <form className="max-w-xl bg-white p-6 space-y-6 rounded-xl" action={formAction}>
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
                <button className="default">add</button>
            </form>
        </div>
    )
}