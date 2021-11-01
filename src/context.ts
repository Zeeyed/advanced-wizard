import { createContext, ReactNode } from "react";

interface DefaultContext {
    currentIndexPage: number;
    goNextClick: () => void;
    goPreviousClick: () => void;
    pages: ReactNode[];
};

const defaultContext: DefaultContext = {
    currentIndexPage: 0,
    goNextClick: () => {},
    goPreviousClick: () => {},
    pages: []
};

export const WizardContext = createContext(defaultContext);
