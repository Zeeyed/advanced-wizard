import { Children, ReactNode, useState } from "react";
import { WizardContext } from "../../context";
import { ButtonNext } from "../buttons/buttons-next";
import { ButtonPrevious } from "../buttons/buttons-previous";
import { Pages } from "../pages/pages";

type Props = {
    children: ReactNode
};

const Wizard = ({ children }: Props) => {
    const [currentIndexPage, setCurrentIndexPage] = useState(0);

    const pages = Children.toArray(children);

    const goPreviousPage = () => {
        setCurrentIndexPage(currentIndexPage - 1);
    };

    const goNextPage = () => {
        setCurrentIndexPage(currentIndexPage + 1);
    }
    
    const context = {
        currentIndexPage,
        goNextPage,
        goPreviousPage,
        steps: pages.length
    }

    return (
        <WizardContext.Provider value={context}>
            <div className="wizard">
                <div className="content">
                    {children}
                </div>            
            </div>
        </WizardContext.Provider>
    );
};

Wizard.Pages = Pages;
Wizard.ButtonNext = ButtonNext;
Wizard.ButtonPrevious = ButtonPrevious;

export default Wizard;
