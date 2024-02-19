import { NavDropdown, NavItem as NI, sidebarNavs } from '@/lib/sidebar/sidebar';
import { ShoppingCart } from 'iconsax-react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { activeInactive } from './sidebar';

export const NavLink: React.FC<{ nav: NI }> = ({ nav }) => {
    const pathName = usePathname();
    const activeNav = (path: string) => activeInactive(pathName.includes(path));

    return (
        <Link href={nav.path} className={`flex items-center gap-2 p-2 text-gray-900 rounded-lg capitalize whitespace-nowrap font-medium ${activeNav(nav.path)}`}>
            {nav.icon || <ShoppingCart className="w-5 h-5" />}
            {nav.title}
        </Link>
    );
};