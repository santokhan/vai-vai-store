import { Document, Money, Profile2User, ShieldSecurity, Shop, ShoppingCart, User } from "iconsax-react";

export type NavLink = {
    name: string;
    path: string;
    icon?: JSX.Element
}

export type NavItem = {
    title: string;
    icon?: JSX.Element;
    path: string;
}

export interface NavDropdown extends NavItem {
    children?: NavLink[];
}

export const sales: NavDropdown = {
    title: 'sales',
    path: '/sales',
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

export const product: NavDropdown = {
    title: 'product',
    path: '/product',
    icon: <Shop className="w-5 h-5 text-gray-500" />,
    children: [
        {
            name: "type",
            path: "/type",
        },
        {
            name: "brand",
            path: "/brand",
        },
        {
            name: "model",
            path: "/model",
        },
        {
            name: "seller",
            path: "/seller",
        },
    ],
};

export const report: NavDropdown = {
    title: 'report',
    path: '/report',
    icon: <Document className="w-5 h-5 text-gray-500" />,
    children: [
        {
            name: "sales report",
            path: "/sales"
        },
        {
            name: "loss profit report",
            path: "/loss-profit"
        },
    ],
};

export const stackEntry: NavDropdown = {
    title: 'stock',
    path: "/stock",
    icon: <ShoppingCart className="w-5 h-5 text-gray-500" />,
    children: [
        {
            name: "stock entry",
            path: "/entry"
        },
        {
            name: "stock table",
            path: "/table"
        },
    ],
};

export const warranty: NavItem = {
    title: 'warranty',
    path: "/warranty",
    icon: <ShieldSecurity className="w-5 h-5 text-gray-500" />,
};

export const customer: NavItem = {
    title: 'customer',
    path: "/customer",
    icon: <Profile2User className="w-5 h-5 text-gray-500" />,
};

export const user: NavItem = {
    title: 'user',
    path: "/user",
    icon: <User className="w-5 h-5 text-gray-500" />
};

export const expenses: NavItem = {
    title: 'expenses',
    path: "/expenses",
    icon: <Money className="w-5 h-5 text-gray-500" />
};

export const sidebarNavs: NavDropdown[] = [
    customer,
    expenses,
    product,
    report,
    sales,
    stackEntry,
    user,
    warranty,
];