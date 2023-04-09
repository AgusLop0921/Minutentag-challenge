import { render, screen, fireEvent } from '@testing-library/react';
import { PlayerStatus } from '../PlayerStatus';

describe('PlayerStatus', () => {
    it('render Online on play status, and 1 on counter', () => {
        render(<PlayerStatus />);

        expect(screen.getByText("Online")).toBeInTheDocument();
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it('render away the first time the Toggle status button is clicked and increment the counter by 1', () => {
        render(<PlayerStatus />);
        fireEvent.click(screen.getByText("Toggle status"));
        expect(screen.getByText("Away")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
    });
});
