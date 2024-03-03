'use client';

import updateDue from "@/actions/sales/update-due";
import Button from "@/components/button/button";
import InputBox from "@/components/form/input-box";
import { ActionPayDue } from "@/components/table/action";
import { Dialog, Transition } from "@headlessui/react";
import { Card } from "iconsax-react";
import { FC, FormEvent, Fragment, useState } from "react";
import { toast } from "react-toastify";

export const Due: FC<{ due: string | number, salesId: string }> = ({ due, salesId }) => {
    let [isOpen, setIsOpen] = useState<boolean>(false);
    let [payAmount, setpayAmount] = useState<number>(0);
    let [adding, setadding] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setadding(true);
        updateDue(salesId, payAmount).then(data => {
            if (data) {
                toast(data.message);
            } else {
                toast('Something went wrong');
            }
            setadding(false);
            closeModal();
        })
    }

    if (!due) { return null; }

    return (
        <div>
            <div className="flex gap-2 items-center">
                <div className="w-1/2">{due}</div>
                <div className="w-1/2">
                    <ActionPayDue handleClick={openModal} />
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <form onSubmit={handleSubmit}>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >Pay Due</Dialog.Title>
                                        <InputBox className='mt-2'>
                                            <input
                                                type='number'
                                                name='due'
                                                id='due'
                                                className='default'
                                                placeholder='Enter Amount'
                                                required
                                                onChange={(e) => { setpayAmount(parseInt(e.target.value)) }}
                                            />
                                        </InputBox>

                                        <div className="mt-4">
                                            <Button size="md"><Card className='w-4 h-4' />Pay{adding && '...'}</Button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}