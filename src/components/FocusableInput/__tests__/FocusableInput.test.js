import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FocusableInput } from "../FocusableInput";

describe("FocusableInput", () => {
  it("should not receive focus on mount if focused prop is false", () => {
    render(<FocusableInput focusable={false} />);
    const inputElement = screen.getByRole("textbox");
    expect(document.activeElement).not.toBe(inputElement);
  });

  it("should receive focus on mount if focused prop is true", () => {
    render(<FocusableInput focusable={true} />);
    const inputElement = screen.getByRole("textbox");
    expect(document.activeElement).toBe(inputElement);
  });

  it("should receive focus when focused prop is changed from false to true", () => {
    const { rerender } = render(<FocusableInput focusable={false} />);
    const inputElement = screen.getByRole("textbox");

    rerender(<FocusableInput focusable={true} />);
    expect(document.activeElement).toBe(inputElement);
  });

  it("should not lose focus when focused prop is changed from true to true", () => {
    const { rerender } = render(<FocusableInput focusable={true} />);
    const inputElement = screen.getByRole("textbox");

    userEvent.type(inputElement, "hello");
    rerender(<FocusableInput focusable={true} />);
    expect(document.activeElement).toBe(inputElement);
  });
});
