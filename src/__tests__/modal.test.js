import { screen, render } from "@testing-library/react";
import { Modal } from "../components/Modal";

describe("Testando o component Modal", () => {
  test("Renderização de children", () => {
    render(<Modal>Batata</Modal>);

    expect(screen.getByText(/Batata/)).toBeVisible();
  });
});
