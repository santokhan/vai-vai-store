import React, { FC } from "react";

type PageOutOfProps = {
    pageNumber: number;
    totalPageCount: number;
};

const PageOutOf: FC<PageOutOfProps> = ({ pageNumber, totalPageCount }) => (
    <span className="flex items-center gap-1 px-2 whitespace-nowrap">
        <span>Page</span>
        <strong>{pageNumber}</strong> out of
        <strong>{totalPageCount}</strong>
    </span>
);

export default PageOutOf;
