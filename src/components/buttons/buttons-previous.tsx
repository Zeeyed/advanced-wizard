import { useContext } from "react";
import { WizardContext } from "../../context";

export const ButtonPrevious = () => {

    const { currentIndexPage, goPreviousPage } = useContext(WizardContext);

    return (
        currentIndexPage > 0
        ? <button
            type="button"
            onClick={goPreviousPage}>
                Previous
            </button>
        : null
    );
};
