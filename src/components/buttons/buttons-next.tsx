import { useContext } from "react";
import { WizardContext } from "../../context";

export const ButtonNext = () => {

    const { currentIndexPage, pages, goNextClick } = useContext(WizardContext);
    return (
        currentIndexPage + 1 < pages.length
        ? <button
            type="button"
            onClick={goNextClick}>
                Next
            </button>
        : null
    );
};
