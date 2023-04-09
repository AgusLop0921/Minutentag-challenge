import { render, screen, fireEvent } from '@testing-library/react';
import { Rating } from '../Rating';

describe('Rating', () => {
  it('render five stars ', () => {
    render(<Rating />);
    const starElements = screen.getAllByTestId("star");

    expect(starElements).toHaveLength(5);
  });

  it('render all the stars without active class the first time', () => {
    const { container } = render(<Rating />);

    expect(container.getElementsByClassName('active').length).toBe(0);
  });

  it('add active to one star when is clicked', () => {
    const { container } = render(<Rating />);
    const starElement = screen.getAllByTestId("star")[0];
    fireEvent.click(starElement);

    expect(container.getElementsByClassName('active').length).toBe(1);
  });

  it('add active to two stars when the second star is clicked', () => {
    const { container } = render(<Rating />);
    const starElement = screen.getAllByTestId("star")[1];
    fireEvent.click(starElement);

    expect(container.getElementsByClassName('active').length).toBe(2);
  });

  it('add active to three stars when the third star is clicked', () => {
    const { container } = render(<Rating />);
    const starElement = screen.getAllByTestId("star")[2];
    fireEvent.click(starElement);

    expect(container.getElementsByClassName('active').length).toBe(3);
  });

  it('add active to four stars when the third star is clicked', () => {
    const { container } = render(<Rating />);
    const starElement = screen.getAllByTestId("star")[3];
    fireEvent.click(starElement);

    expect(container.getElementsByClassName('active').length).toBe(4);
  });

  it('add active to all the stars when the last star is clicked', () => {
    const { container } = render(<Rating />);
    const starElement = screen.getAllByTestId("star")[3];
    fireEvent.click(starElement);

    expect(container.getElementsByClassName('active').length).toBe(4);
  });
});
