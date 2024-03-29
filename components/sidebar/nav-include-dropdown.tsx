import { useSidebarContext } from "@/context/sidebar-context";
import { ArrowDown2, ArrowUp2, ShoppingCart } from "iconsax-react";
import { activeInactive } from "./sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavIncludeChild } from "@/lib/sidebar/sidebar";
import { FC } from "react";

interface DropdownProps {
    nav: NavIncludeChild;
}

export const NavIncludeDropdown: FC<DropdownProps> = ({ nav }) => {
    const pathName = usePathname();
    const activeNav = (path: string) => activeInactive(pathName.includes(path));
    const { activeNavTitle, handleExpand } = useSidebarContext();

    return (
        <div className='space-y-1 overflow-hidden'>
            <button
                type="button" onClick={() => { handleExpand(nav.title) }}
                className={`flex items-center gap-3 w-full p-2 text-base transition duration-75 rounded-lg overflow-hidden ${activeNav(nav.path)}`}
            >
                {/* <div className="w-5 h-5 overflow-hidden">{nav.icon || <ShoppingCart className="w-full h-full" />}</div> */}
                <span className="flex-1 text-left capitalize whitespace-nowrap font-medium">{nav.title}</span>
                {activeNavTitle == nav.title ? <ArrowUp2 className="w-4 h-4" /> : <ArrowDown2 className="w-4 h-4" />}
            </button>
            {
                activeNavTitle == nav.title &&
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