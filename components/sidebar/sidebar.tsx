'use client';
import { FC, Fragment } from 'react';
import { sidebarNavs } from '@/lib/sidebar/sidebar';
import { NavLink } from './nav-link';
import SidebarProvider from '@/context/sidebar-context';
import { NavIncludeDropdown } from './nav-include-dropdown';

export const activeInactive = (bool: boolean) => bool ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-transparent hover:bg-gray-100 text-gray-700';

export const AsystSidebar: FC = () => (
    <div className="w-[250px] p-4 bg-white relative">
        <h5 className="text-base font-semibold text-gray-400 uppercase">Menu</h5>
        <SidebarProvider>
            <nav className="space-y-2 py-4">
                {sidebarNavs.map((nav, index) =>
                    <Fragment key={index}>
                        {nav.children ? <NavIncludeDropdown nav={{
                            title: nav.title,
                            path: nav.path,
                            children: nav.children
                        }} /> : <NavLink nav={nav} />}
                    </Fragment>
                )}
            </nav>
        </SidebarProvider>
    </div>
)

export default function Sidebar() {
    return (
        <div className={`flex-shrink-0 hidden md:block`}>
            <AsystSidebar />
        </div>
    );
}