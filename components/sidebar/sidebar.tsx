'use client';
import { FC, Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import { NavDropdown, NavItem, sidebarNavs } from '@/lib/sidebar/sidebar';
import { ArrowDown2, ShoppingCart } from 'iconsax-react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Dropdown: FC<{ nav: NavDropdown }> = ({ nav }) => {
    const pathName = usePathname();
    const pathNameList = pathName.split('/');
    const navPath = nav.path.split('/');
    const active = pathNameList[1].toLowerCase() === navPath[1].toLowerCase();

    const [isOpen, setIsOpen] = useState(pathNameList[1].toLowerCase() === navPath[1].toLowerCase());
    const arrowClasses = isOpen ? '-rotate-180' : '';

    return (
        <li>
            <button
                type="button" onClick={() => { setIsOpen(!isOpen) }}
                className={["flex items-center gap-3 w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 font-medium",
                    active ? "bg-gray-100" : ""].join(" ")}
            >
                {nav.icon || <ShoppingCart className="w-5 h-5 text-gray-500" />}
                <span className="flex-1 text-left whitespace-nowrap capitalize">{nav.title}</span>
                <span className='max-w-[1rem] max-h-[1rem] overflow-hidden'>
                    <ArrowDown2 className={`w-[1rem] h-[1rem] transition-transform linear ${arrowClasses}`} />
                </span>
            </button>
            {
                isOpen &&
                <ul id="dropdown-example" className="py-2 space-y-2">
                    {
                        nav.children?.map((childNav, childIdx) => {
                            const activeTw = pathName.includes((nav.path + childNav.path)) ? 'bg-gray-100' : ''

                            return (
                                <li key={childIdx}>
                                    <Link href={`${nav.path + childNav.path}`}
                                        className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 capitalize ${activeTw}`}
                                    >{childNav.name}</Link>
                                </li>
                            )
                        })
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
                {nav.icon || <ShoppingCart className="w-5 h-5 text-gray-500" />}
                <span className="ml-3 capitalize">{nav.title}</span>
            </a>
        </li>
    );
};

export const AsystSidebar: FC = () => {
    return (
        <div id="drawer-navigation" className="p-4 transition-transform bg-white w-full relative" tabIndex={-1} aria-labelledby="drawer-navigation-label">
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase">Menu</h5>
            <ul className="space-y-2 font-medium py-4 overflow-y-auto">
                {
                    sidebarNavs.map((nav, index) =>
                        <Fragment key={index}>
                            {nav.children ? <Dropdown nav={nav} /> : <NavItem nav={nav} />}
                        </Fragment>
                    )
                }
            </ul>
        </div>
    )
}

const drawerWidth = 240;

export default function Sidebar() {
    return (
        <Box sx={{
            width: {
                sm: drawerWidth
            },
            flexShrink: {
                sm: 0
            },
            display: {
                xs: 'none',
                md: 'block'
            }
        }}>
            <AsystSidebar />
        </Box>
    );
}


