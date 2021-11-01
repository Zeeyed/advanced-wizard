import { Children, ReactNode, useState } from "react";
import { WizardContext } from "../../context";
import { ButtonNext } from "../buttons/buttons-next";
import { ButtonPrevious } from "../buttons/buttons-previous";
import { Pages } from "../Pages/pages";

type Props = {
    children: ReactNode
};

const Wizard = ({ children }: Props) => {
    const [currentIndexPage, setCurrentIndexPage] = useState(0);

    const pages = Children.toArray(children);

    const goPreviousClick = () => {
        setCurrentIndexPage(currentIndexPage - 1);
    };

    const goNextClick = () => {
        setCurrentIndexPage(currentIndexPage + 1);
    }
    
    const context = {
        currentIndexPage,
        goNextClick,
        goPreviousClick,
        pages
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
