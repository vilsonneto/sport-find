import { screen, render } from "@testing-library/react";
import Input from "../components/Input";
describe("Testando o component Input", () => {
  test("Testando input com erro", () => {
    const register = jest.fn();
    render(
      <Input
        error="macarrao"
        label="Teste"
        name="Teste"
        register={register}
      ></Input>
    );

    expect(screen.getByText(/macarrao/)).toBeVisible();
  });
});
