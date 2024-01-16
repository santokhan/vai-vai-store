import { Document, Money, Profile2User, Shop, ShoppingCart, User } from "iconsax-react";

export type NavLink = {
    name: string;
    path: string;
    icon?: JSX.Element
}

export type NavItem = {
    title: string;
    prefix?: string;
    icon?: JSX.Element;
    path?: string;
}

export type NavDropdown = {
    title: string;
    prefix?: string;
    icon?: JSX.Element;
    children?: NavLink[];
}

export const sales: NavDropdown = {
    title: 'sales',
    prefix: '/sales',
    icon: <Shop className="w-5 h-5 text-gray-500" />,
    children: [
        {
            name: "sales entry",
            path: "/entry",
        },
        {
            name: "sales table",
            path: "/table",
        },
        {
            name: "sales return",
            path: "/return",
        },
    ],
};

export const report: NavDropdown = {
    title: 'report',
    icon: <Document className="w-5 h-5 text-gray-500" />,
    children: [
        {
            name: "sales report",
            path: "/report/sales"
        },
        {
            name: "loss profit report",
            path: "/report/loss-profit"
        },
    ],
};

export const stackEntry: NavDropdown = {
    title: 'stack entry',
    icon: <ShoppingCart className="w-5 h-5 text-gray-500" />,
};

export const customer: NavDropdown = {
    title: 'customer',
    icon: <Profile2User className="w-5 h-5 text-gray-500" />,
};

export const user: NavDropdown = {
    title: 'user',
    icon: <User className="w-5 h-5 text-gray-500" />
};

export const expenses: NavDropdown = {
    title: 'expenses',
    icon: <Money className="w-5 h-5 text-gray-500" />
};

export const outlet: NavDropdown = {
    title: 'sales',
    children: [
        {
            name: "Vai Vai store 1",
            path: ""
        },
        {
            name: "Vai Vai store 2",
            path: ""
        },
        {
            name: "SR",
            path: ""
        },
    ],
};

export const sidebarNavs: (NavDropdown)[] = [
    sales,
    report,
    stackEntry,
    customer,
    user,
    expenses
];