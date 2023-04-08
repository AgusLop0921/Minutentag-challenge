import { render, screen, fireEvent } from '@testing-library/react';
import { Grocery } from '../Grocery';

const products = [
    {
        name: "Oranges", votes: 0
    },
    {
        name: "Bananas", votes: 0
    },
    {
        name: "Apples", votes: 0
    },
    {
        name: "Tomatoes", votes: 0
    },
]

describe('Grocery', () => {
    it('render all the products with name and 0 votes first', () => {
        render(<Grocery products={products} />);

        expect(screen.getByText("Oranges - votes: 0")).toBeInTheDocument();
        expect(screen.getByText("Bananas - votes: 0")).toBeInTheDocument()
        expect(screen.getByText("Apples - votes: 0")).toBeInTheDocument()
        expect(screen.getByText("Tomatoes - votes: 0")).toBeInTheDocument()
    });

    it('add a vote to the first product when the + is clicked', () => {
        const continaer = render(<Grocery products={products} />);
        fireEvent.click(screen.getAllByRole('button')[0]);
        expect(screen.getByText("Oranges - votes: 1")).toBeInTheDocument();
    });

    it('subtract one vote from the first product when - is clicked', () => {
        render(<Grocery products={products} />);
        fireEvent.click(screen.getAllByRole('button')[1]);
        expect(screen.getByText("Oranges - votes: 0")).toBeInTheDocument();
    });
});