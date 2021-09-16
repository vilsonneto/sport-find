import { render, screen } from "@testing-library/react";

import InputSelect from "./../components/InputSelect";

describe("Enquanto o inputSelect estiver funcionando", () => {
  test("Deverá receber os valores das option Quando eles forem passados para o componente", () => {
    const mockedRegister = jest.fn();

    const optionsTest = ["Foo", "Bar", "Baz"];

    render(
      <InputSelect
        label="Teste"
        name="test"
        options={optionsTest}
        register={mockedRegister}
        error={null}
      />
    );

    const inputSelect = screen.getAllByRole("option");

    expect(inputSelect[0]).toHaveValue("");
    expect(inputSelect[1]).toHaveValue(optionsTest[0]);
    expect(inputSelect[2]).toHaveValue(optionsTest[1]);
    expect(inputSelect[3]).toHaveValue(optionsTest[2]);
    expect(inputSelect[3]).not.toHaveValue("Boo");
  });
});
