import { render, screen, fireEvent } from '@testing-library/react';
import { Message } from '../Message';

describe('renders learn react link', () => {
  it('render anchor text', () => {  
    render(<Message />);
    expect(screen.getByText("Want to buy a new car?")).toBeInTheDocument();
  });

  it('Doesnt render paragraph text at start', () => {  
    render(<Message />);
    expect(screen.queryByText("Call +11 22 33 44 now!")).not.toBeInTheDocument();
  });

  it('render paragraph when the anchor is clicked and hide paragraph when is clicked again', () => {  
    render(<Message />);
    const linkElement = screen.getByText("Want to buy a new car?");

    fireEvent.click(linkElement);
    expect(screen.getByText("Call +11 22 33 44 now!")).toBeInTheDocument();

    fireEvent.click(linkElement);
    expect(screen.queryByText("Call +11 22 33 44 now!")).not.toBeInTheDocument();
  });
});
