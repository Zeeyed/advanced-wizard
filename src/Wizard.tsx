import { Children, FunctionComponent, ReactNode, useState } from "react";

type Props = {
    children: ReactNode
};

export const Wizard: FunctionComponent<Props> = ({ children }) => {
    const [currentIndexPage, setCurrentIndexPage] = useState(0);

    const pages = Children.toArray(children);
    const currentPage = pages[currentIndexPage];

    const onPreviousClick = () => {
        setCurrentIndexPage(currentIndexPage - 1);
    };

    const onNextClick = () => {
        setCurrentIndexPage(currentIndexPage + 1);
    }
    
    return (
        <div className="wizard">
            <div className="content">
                {currentPage}
            </div>
            {currentIndexPage > 0 ? <button type="button" onClick={onPreviousClick}>Previous</button> : null}
            {currentIndexPage + 1 < pages.length ? <button type="button" onClick={onNextClick}>Next</button> : null}
        </div>
    );
};
