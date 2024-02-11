import { ReactNode } from "react";

interface FormContainerProps {
    children: ReactNode;
    className?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, className }) => {
    return (
        <div className={`mx-auto bg-white p-4 lg:p-6 rounded-xl space-y-6 ${className}`}>
            {children}
        </div>
    );
};

export default FormContainer;