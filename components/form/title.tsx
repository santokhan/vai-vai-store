import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    tw?: string;
}

const FormTitle: React.FC<Props> = ({ children, tw }) => {
    return (
        <h4 className={['text-lg font-medium capitalize', tw || ""].join(" ")}>{children}</h4>
    );
};

export default FormTitle;
