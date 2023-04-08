import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Tabs } from "../Tabs";

const tabs = [
    {
      label: "Tab 1",
      content: "Content for Tab 1",
    },
    {
      label: "Tab 2",
      content: "Content for Tab 2",
    },
    {
      label: "Tab 3",
      content: "Content for Tab 3",
    },
  ];
describe("Tabs", () => {

  it("renders tabs with labels and content", () => {
    render(<Tabs tabs={tabs} />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();

    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
  });

  it("sets the active tab when clicked", () => {
   render(<Tabs tabs={tabs} />);

   const tab2 = screen.getByText("Tab 2");
    fireEvent.click(tab2);

    expect(tab2).toHaveClass("active");
    expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
  });
});