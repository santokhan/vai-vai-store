import { Context, createContext, useContext } from "react";

export const FormContext = createContext({});

export const useFormContext = () => {
    return useContext(FormContext);
};
