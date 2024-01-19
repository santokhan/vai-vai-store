'use client';

import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export type InitialObject = {
    [key: string]: () => JSX.Element
}

export function FormTab({ InitialObject }: { InitialObject: InitialObject }) {
    let [categories] = useState<InitialObject>(InitialObject || {
        SearchbyBrand: () => <></>,
        SearchbyIMEI: () => <></>
    })

    return (
        <div className="w-full">
            <Tab.Group>
                <div className="mb-2">
                    <Tab.List className="flex space-x-1 rounded-xl border p-2 bg-gray-100">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:outline-none',
                                        selected ? 'bg-white text-blue-700 shadow' : 'hover:bg-gray-200'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                </div>
                <Tab.Panels className="w-full mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel key={idx}>
                            {Object.values(categories)[idx]}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
