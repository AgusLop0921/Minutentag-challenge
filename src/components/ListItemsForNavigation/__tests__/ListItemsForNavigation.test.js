import { render, fireEvent } from "@testing-library/react";
import { ListItemsForNavigation } from "../ListItemsForNavigation";

describe("ListItemsForNavigation", () => {
  test("navigates through items with arrow keys", () => {
    const { getByText } = render(<ListItemsForNavigation />);
    const item0 = getByText("Jim Halper - Sales");
    const item1 = getByText("Dwight Schrute - Sales");
    const item2 = getByText("Michael Scott - Regional manager");
    const item3 = getByText("Kevin Malone - Accountant");

    fireEvent.keyDown(item0, { key: "ArrowRight" });
    expect(document.activeElement).toBe(item1);

    fireEvent.keyDown(item1, { key: "ArrowDown" });
    expect(document.activeElement).toBe(item2);

    fireEvent.keyDown(item2, { key: "ArrowLeft" });
    expect(document.activeElement).toBe(item1);

    fireEvent.keyDown(item1, { key: "ArrowUp" });
    expect(document.activeElement).toBe(item0);
  });
});