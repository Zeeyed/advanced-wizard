import { createContext } from "react";

interface DefaultContext {
    currentIndexPage: number;
    goNextPage: () => void;
    goPreviousPage: () => void;
    steps: number;
};

const defaultContext: DefaultContext = {
    currentIndexPage: 0,
    goNextPage: () => {},
    goPreviousPage: () => {},
    steps: 0
};

export const WizardContext = createContext(defaultContext);
