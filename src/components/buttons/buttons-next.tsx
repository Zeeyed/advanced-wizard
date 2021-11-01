import { useContext } from "react";
import { WizardContext } from "../../context";

export const ButtonNext = () => {

    const { currentIndexPage, goNextPage, steps } = useContext(WizardContext);
    return (
        currentIndexPage + 1 < steps
        ? <button
            type="button"
            onClick={goNextPage}>
                Next
            </button>
        : null
    );
};
