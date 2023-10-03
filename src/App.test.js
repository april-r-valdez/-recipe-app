import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render Recipe Generator App", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    name: "Recipe Generator App",
  });
  expect(headingElement).toBeInTheDocument();
});
