import React from "react";
import { render, screen } from "@testing-library/react";
import { CardEvent } from "../components/CardEvent";

describe("testando component carevent", () => {
  test("render category paragraphs react", () => {
    render(<CardEvent />);
    const cardEvent = screen.getByText(/event.category/);
    expect(cardEvent).toBeInTheDocument();
  });
});
