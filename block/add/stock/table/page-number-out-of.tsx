import React, { FC } from "react";

type PageOutOfProps = {
    pageNumber: number;
    totalPageCount: number;
    onPageChange?: (page: number) => void;
};

const PageOutOf: FC<PageOutOfProps> = ({ pageNumber, totalPageCount, onPageChange }) => (
    <span className="flex items-center gap-1 px-2 whitespace-nowrap">
        <span>Page</span>
        <input
            type="number"
            min={1}
            max={totalPageCount}
            value={pageNumber}
            readOnly={!onPageChange}
            onChange={(event) => onPageChange?.(Number(event.target.value) || 1)}
            className="w-20 border rounded-lg px-2 py-1"
        />
        <span>out of</span>
        <strong>{totalPageCount}</strong>
    </span>
);

export default PageOutOf;
