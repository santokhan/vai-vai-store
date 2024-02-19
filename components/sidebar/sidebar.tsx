'use client';
import { FC, Fragment, useState } from 'react';
import { NavDropdown, NavItem as NI, sidebarNavs } from '@/lib/sidebar/sidebar';
import { ShoppingCart } from 'iconsax-react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavLink } from './nav-link';

interface DropdownProps {
    nav: NavDropdown;
    handleExpand: () => void;
    expanded: boolean;
}

export const activeInactive = (bool: boolean) => bool ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-transparent hover:bg-gray-100 text-gray-700';

export const Dropdown: FC<DropdownProps> = ({ nav, handleExpand, expanded }) => {
    const pathName = usePathname();
    const activeNav = (path: string) => activeInactive(pathName.includes(path));

    return (
        <div className='space-y-1'>
            <button
                type="button" onClick={handleExpand}
                className={`flex items-center gap-3 w-full p-2 text-base transition duration-75 rounded-lg ${activeNav(nav.path)}`}
            >
                <span>{nav.icon || <ShoppingCart className="w-5 h-5" />}</span>
                <span className="flex-1 text-left capitalize whitespace-nowrap font-medium">{nav.title}</span>
                <span className="w-5 h-5 overflow-hidden grid place-items-center">
                    <svg
                        className={["w-3 h-3 transition-transform", expanded ? '-rotate-180' : ''].join(" ")}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                    </svg>
                </span>
            </button>
            {
                expanded &&
                <nav className="space-y-2 pl-7">
                    {
                        nav.children?.map((childNav, childIdx) => {
                            const fullPath = nav.path + childNav.path;

                            return (
                                <Link href={`${fullPath}`} key={childIdx}
                                    className={`flex items-center py-2 px-3 rounded-lg capitalize whitespace-nowrap font-medium ${activeNav(fullPath)}`}
                                >{childNav.name}</Link>
                            )
                        })
                    }
                </nav>
            }
        </div>
    );
};

export const AsystSidebar: FC = () => {
    const [expandNav, setExpandNav] = useState<string>('');

    return (
        <div className="w-[250px] p-4 bg-white relative">
            <h5 className="text-base font-semibold text-gray-400 uppercase">Menu</h5>
            <nav className="space-y-2 py-4">
                {
                    sidebarNavs.map((nav, index) =>
                        nav.children ?
                            <Dropdown key={index} nav={nav} expanded={expandNav == nav.title} handleExpand={() => {
                                setExpandNav(expandNav == nav.title ? '' : nav.title);
                            }} />
                            :
                            <NavLink nav={nav} key={index} />
                    )
                }
            </nav>
        </div>
    )
}

export default function Sidebar() {
    return (
        <div className={`flex-shrink-0 hidden md:block`}>
            <AsystSidebar />
        </div>
    );
}