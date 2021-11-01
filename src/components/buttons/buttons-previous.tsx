import { useContext } from "react";
import { WizardContext } from "../../context";

export const ButtonPrevious = () => {

    const { currentIndexPage, goPreviousClick } = useContext(WizardContext);

    return (
        currentIndexPage > 0
        ? <button
            type="button"
            onClick={goPreviousClick}>
                Previous
            </button>
        : null
    );
};
