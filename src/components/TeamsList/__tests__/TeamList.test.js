import { render, screen, fireEvent } from '@testing-library/react';
import { TeamsList } from '../TeamsList';

describe('TeamList', () => {
    it('render team list when initial list is clicked', () => {
        render(<TeamsList />);
        fireEvent.click(screen.getByText("Initial list"));

        expect(screen.getByText("Red / 4 / 14")).toBeInTheDocument();
        expect(screen.getByText("Blue / 2 / 9")).toBeInTheDocument();
        expect(screen.getByText("Yellow / 3 / 13")).toBeInTheDocument();
    });

    it('render team list ordered from highest to lowest', () => {
        render(<TeamsList />);
        fireEvent.click(screen.getByText("Highest to Lowest"));
        const teamsList = screen.getAllByRole('listitem');
        const orderedTeamsList = [
            'Red / 4 / 14',
            'Yellow / 3 / 13',
            'Blue / 2 / 9',
        ];
        teamsList.forEach((e, index) => {
            expect(e.textContent).toBe(orderedTeamsList[index]);
        });
    });

    it('render team list ordered from lowest to highest', () => {
        render(<TeamsList />);
        fireEvent.click(screen.getByText("Lowest to Highest"));
        const teamsList = screen.getAllByRole('listitem');
        const orderedTeamsList = [
            'Blue / 2 / 9',
            'Yellow / 3 / 13',
            'Red / 4 / 14',
        ];
        teamsList.forEach((e, index) => {
            expect(e.textContent).toBe(orderedTeamsList[index]);
        });
    });

    it('render only teams with at least 3 players', () => {
        render(<TeamsList />);
        fireEvent.click(screen.getByText("Teams with at least 3 players"));

        expect(screen.getByText("Red / 4 / 14")).toBeInTheDocument();
        expect(screen.queryByText("Blue / 2 / 9")).not.toBeInTheDocument();
        expect(screen.getByText("Yellow / 3 / 13")).toBeInTheDocument();
    });
    //   it('render all the stars without active class the first time', () => {  
    //     const { container } =  render(<Rating />);

    //     expect(container.getElementsByClassName('active').length).toBe(0);
    //   });

    //   it('add active to one star when is clicked', () => {  
    //     const { container } =   render(<Rating />);
    //     const starElement = screen.getAllByTestId("star")[0];
    //     fireEvent.click(starElement);

    //     expect(container.getElementsByClassName('active').length).toBe(1);
    //   });
});
