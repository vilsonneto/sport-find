import { render, screen } from "@testing-library/react";
import Button from ".";

test("Render correct children text", () => {
    render(<Button type="button" onClick={()=>{}}>Click me!</Button>);
    const buttonText = screen.getByText("Click me!");
    expect(buttonText).toBeInTheDocument()
})