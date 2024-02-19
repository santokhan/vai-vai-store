'use client';
import { FC, Fragment, useState } from 'react';
import { NavDropdown, NavItem, sidebarNavs } from '@/lib/sidebar/sidebar';
import { ShoppingCart } from 'iconsax-react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Dropdown: FC<{ nav: NavDropdown }> = ({ nav }) => {
    const pathName = usePathname();
    const pathNameList = pathName.split('/');
    const navPath = nav.path.split('/');
    const active = pathNameList[1].toLowerCase() === navPath[1].toLowerCase();

    const [isOpen, setIsOpen] = useState(pathNameList[1].toLowerCase() === navPath[1].toLowerCase());

    return (
        <Fragment>
            <button
                type="button" onClick={() => { setIsOpen(!isOpen) }}
                className={["flex items-center gap-3 w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 font-medium",
                    active ? "bg-gray-100" : ""].join(" ")}
            >
                {nav.icon || <ShoppingCart className="w-5 h-5 text-gray-500" />}
                <span className="flex-1 text-left whitespace-nowrap capitalize">{nav.title}</span>
                <svg
                    className={["w-3 h-3", isOpen ? 'transform rotate-180' : ''].join(" ")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {
                isOpen &&
                <nav className="py-2 space-y-2">
                    {
                        nav.children?.map((childNav, childIdx) => {
                            const activeTw = pathName.includes((nav.path + childNav.path)) ? 'bg-gray-100' : ''

                            return (
                                <Link href={`${nav.path + childNav.path}`} key={childIdx}
                                    className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 capitalize ${activeTw}`}
                                >{childNav.name}</Link>
                            )
                        })
                    }
                </nav>
            }
        </Fragment>
    );
};

const NavItem: React.FC<{ nav: NavItem }> = ({ nav }) => {
    return (
        <Link href={nav.path} className="flex items-center gap-2 p-2 text-gray-900 rounded-lg capitalize hover:bg-gray-100">
            {nav.icon || <ShoppingCart className="w-5 h-5 text-gray-500" />}
            {nav.title}
        </Link>
    );
};

export const AsystSidebar: FC = () => {
    return (
        <div className="w-[250px] p-4 transition-transform bg-white relative">
            <h5 className="text-base font-semibold text-gray-500 uppercase">Menu</h5>
            <nav className="space-y-2 font-medium py-4 overflow-y-auto">
                {
                    sidebarNavs.map((nav, index) =>
                        <Fragment key={index}>
                            {nav.children ? <Dropdown nav={nav} /> : <NavItem nav={nav} />}
                        </Fragment>
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


