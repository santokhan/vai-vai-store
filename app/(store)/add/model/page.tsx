'use client';

import ModelFormWithTable from "@/block/add/model/form/model";
import ReactQueryContext from "@/context/react-query-context";

/**
 * Register a new model
 * 
 * @returns 
 */
export default function AddModelPage() {
    return (
        <ReactQueryContext>
            {/* Tab Header */}

            {/* Tab Content */}
            <ModelFormWithTable />
        </ReactQueryContext>
    )
}