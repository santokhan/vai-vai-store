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
    icon: <Shop className="w-5 h-5" />,
    children: [
        {
            name: "entry",
            path: "/entry",
        },
        {
            name: "table",
            path: "/table",
        },
        {
            name: "return",
            path: "/return",
        },
    ],
};

export const add: NavDropdown = {
    title: 'add',
    path: '/add',
    icon: <Shop className="w-5 h-5" />,
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
    icon: <Document className="w-5 h-5" />,
    children: [
        {
            name: "sales",
            path: "/sales"
        },
        {
            name: "loss profit",
            path: "/loss-profit"
        },
    ],
};

export const stock: NavDropdown = {
    title: 'stock',
    path: "/stock",
    icon: <ShoppingCart className="w-5 h-5" />,
    children: [
        {
            name: "entry",
            path: "/entry"
        },
        {
            name: "table",
            path: "/table"
        },
    ],
};

export const expenses: NavDropdown = {
    title: 'expenses',
    path: "/expenses",
    icon: <Money className="w-5 h-5" />,
    children: [
        {
            name: "rent",
            path: "/rent",
        },
        {
            name: "installment",
            path: "/installment",
        },
        {
            name: "other",
            path: "/other",
        },
    ],
};

export const dashboard: NavItem = {
    title: 'dashboard',
    path: "/dashboard",
    icon: <ShieldSecurity className="w-5 h-5" />,
};

export const warranty: NavItem = {
    title: 'warranty',
    path: "/warranty",
    icon: <ShieldSecurity className="w-5 h-5" />,
};

export const customer: NavItem = {
    title: 'customer',
    path: "/customer",
    icon: <Profile2User className="w-5 h-5" />,
};

export const user: NavItem = {
    title: 'user',
    path: "/user",
    icon: <User className="w-5 h-5" />
};

export const sidebarNavs: NavDropdown[] = [
    dashboard,
    add,
    stock,
    sales,
    customer,
    report,
    user,
    warranty,
    expenses,
];