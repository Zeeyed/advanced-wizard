import { Children, ReactNode, useContext } from "react";
import { WizardContext } from "../../context";

export const Pages = ({ children } : { children: ReactNode }) => {
    const { currentIndexPage } = useContext(WizardContext);

    const pages = Children.toArray(children);
    const currentPage = pages[currentIndexPage];

    return (
        <>
            {currentPage}
        </>
    )
}