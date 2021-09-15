import { render, screen } from "@testing-library/react";
import GroupCard from "../components/GroupCard";
import ArrowLeft from "../components/ArrowLeft";

const groupMocked = {
  id: 1,
  creator: 1,
  name: "Trilheiros",
  state: "Rio de Janeiro",
  category: "Trilha",
  description: "Explorando as belezas naturais do estado",
  groupEvents: [],
  members: [
    { name: "adm", id: 1 },
    { name: "Miqueias", id: 2 },
  ],
  banned: [],
};

describe("Testando o component GroupCard", () => {
  test("Verificando se o componente é renderizado", () => {
    render(<GroupCard group={groupMocked} />);

    const container = screen.getByTestId(/container/);
    const containerChild = screen.getByTestId(/child/);

    expect(container).toBeInTheDocument();
    expect(container).toContainElement(containerChild);
    expect(containerChild).not.toContainElement(container);
  });

  test("verificando conteúdo do componente", () => {
    render(<GroupCard group={groupMocked} />);

    const groupName = screen.queryByText(/Trilheiros/);
    const groupCategory = screen.queryByText(/Trilha/);
    const groupState = screen.queryByText(/Rio de Janeiro/);

    expect(groupName).toBeInTheDocument();
    expect(groupCategory).toHaveClass("category");
    expect(groupState).toBeInTheDocument();
  });
});

describe("Testando o component ArrowLeft", () => {
  test("Verificando se o componente foi renderizado", () => {
    render(<ArrowLeft />);

    const container = screen.getByTestId(/container/);
    const containerChild = screen.getByTestId(/child/);

    expect(container).toContainElement(containerChild);
    expect(containerChild).not.toContainElement(container);
  });
});
