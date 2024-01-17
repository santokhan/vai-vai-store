'use client';

import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import { NavDropdown, NavItem, sidebarNavs } from '@/lib/sidebar/sidebar';
import { ShoppingCart } from 'iconsax-react'
import { usePathname } from 'next/navigation';

export const Dropdown: FC<{ nav: NavDropdown }> = ({ nav }) => {
    const [isOpen, setIsOpen] = useState(false);

    const pathName = usePathname();
    const pathNameList = pathName.split('/');
    const navPath = nav.path.split('/');
    const active = pathNameList[1].toLowerCase() === navPath[1].toLowerCase()

    // set isOpen to true when page load.
    // use [] dependency to prevent infinite loop
    useEffect(() => {
        if (active) {
            setIsOpen(true);
        };
    }, [])

    return (
        <li>
            <button
                type="button" onClick={() => { setIsOpen(!isOpen) }}
                className={["flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 font-medium",
                    active ? "bg-gray-100" : ""].join(" ")}
            >
                {
                    nav.icon ||
                    <ShoppingCart className="w-5 h-5 text-gray-500" />
                }
                <span className="flex-1 ml-3 text-left whitespace-nowrap capitalize">{nav.title}</span>
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
                <ul id="dropdown-example" className="py-2 space-y-2">
                    {
                        nav.children?.map((childNav, childIdx) => (
                            <li key={childIdx}>
                                <a
                                    href={`${nav.path + childNav.path}`}
                                    className={[
                                        "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 capitalize",
                                        pathName === (nav.path + childNav.path) ? "bg-gray-100" : ""
                                    ].join(" ")}
                                >
                                    {childNav.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            }
        </li>
    );
};

const NavItem: React.FC<{ nav: NavItem }> = ({ nav }) => {
    return (
        <li>
            <a href={nav.path} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                {
                    nav.icon ||
                    <ShoppingCart className="w-5 h-5 text-gray-500" />
                }
                <span className="ml-3 capitalize">{nav.title}</span>
            </a>
        </li>
    );
};

export const AsystSidebar = () => {
    return (
        <div id="drawer-navigation" className="p-4 transition-transform translate-x-0 -translate-x-full+ bg-white w-full relative" tabIndex={-1} aria-labelledby="drawer-navigation-label">
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase">
                Menu
            </h5>
            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" id="drawer-closer" className="lg:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close menu</span>
            </button>
            <div className="py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    {
                        sidebarNavs.map((nav: NavDropdown, index: number) => (
                            <div key={index}>
                                {nav.children ? <Dropdown nav={nav} /> : <NavItem nav={nav} />}
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const drawerWidth = 240;

interface Props { }

export default function Sidebar(props: Props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: { xs: 'none', md: 'block' } }}
        >
            <AsystSidebar />
        </Box>
    );
}


