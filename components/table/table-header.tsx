import { ReactNode } from "react";

export const TableTitle: React.FC<{ children: ReactNode, tw?: string }> = ({ children, tw = '' }) => {
    return (
        <h4 className={`text-lg font-medium capitalize ${tw}`}>{children}</h4>
    );
};