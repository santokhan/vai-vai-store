import { useSidebarContext } from "@/context/sidebar-context";
import { ShoppingCart } from "iconsax-react";
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
                <div className="w-5 h-5 overflow-hidden">{nav.icon || <ShoppingCart className="w-full h-full" />}</div>
                <span className="flex-1 text-left capitalize whitespace-nowrap font-medium">{nav.title}</span>
                <span className="w-5 h-5 overflow-hidden grid place-items-center">
                    <svg
                        className={["w-3 h-3 transition-transform", activeNavTitle == nav.title ? '-rotate-180' : ''].join(" ")}
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