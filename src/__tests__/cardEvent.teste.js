import React from "react";
import { render, screen } from "@testing-library/react";
import { CardEvent } from "../components/CardEvent";

describe("testando component cardEvent", () => {
  test("render carts react", () => {
    const eventCategory = {
      name: "Nati",
      group_Id: 1,
      state: "Rio",
      local: "Rio",
      data: "2020-09-11",
      category: "Yoga",
      description: "Relaxar",
      users: [1],
      creator: 1,
      id: 1,
    };
    render(<CardEvent event={eventCategory} />);

    const cardEvent = screen.getByText(/Yoga/);
    expect(cardEvent).toBeInTheDocument();

    const cardEventName = screen.getByText(/Nati/);
    expect(cardEventName).toBeInTheDocument();

    const cardEventdata = screen.getByText("11/09/2020");
    expect(cardEventdata).toBeInTheDocument();

    const cardEventEncerrado = screen.getByText(/Encerrado/);
    expect(cardEventEncerrado).toBeInTheDocument();
  });
});
