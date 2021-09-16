import { render, screen } from "@testing-library/react";
import ArrowLeft from "../components/ArrowLeft";

describe("Testando o component ArrowLeft", () => {
  test("Verificando se o componente foi renderizado", () => {
    render(<ArrowLeft />);

    const container = screen.getByTestId(/container/);
    const containerChild = screen.getByTestId(/child/);

    expect(container).toContainElement(containerChild);
    expect(containerChild).not.toContainElement(container);
  });
});
