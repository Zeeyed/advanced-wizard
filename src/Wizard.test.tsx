import { render, screen } from "@testing-library/react";
import { Wizard } from "./Wizard";

describe('<Wizard />', () => {
    it('Render Wizard component correctly', () => {
        render(
            <Wizard>
                <div>P1</div>
                <div>P2</div>
                <div>P3</div>
            </Wizard>
        );

        expect(screen.getByText('P1')).toBeInTheDocument();
        expect(screen.queryByText('P2')).not.toBeInTheDocument();
        expect(screen.queryByText('P3')).not.toBeInTheDocument();

        expect(screen.getByRole('button', { name: 'Next'})).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Previous'})).not.toBeInTheDocument();
    });
});
