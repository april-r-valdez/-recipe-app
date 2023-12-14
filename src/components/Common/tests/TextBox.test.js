import { fireEvent, render, screen } from "@testing-library/react";
import TextBox from "../components/TextBox";

const addIngredient = (ingredients) => {
  const ingredientInput = screen.getByPlaceholderText(/Enter ingredient/i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  ingredients.forEach((ingredient) => {
    fireEvent.change(ingredientInput, { target: { value: ingredient } });
    fireEvent.click(buttonElement);
  });
};

describe("TextBox", () => {
  test("should render Ingredient input", async () => {
    render(<TextBox />);
    const ingredientInput = screen.getByPlaceholderText(/Enter ingredient/i);
    expect(ingredientInput).toBeInTheDocument();
  });

  test("should be able to type in input", async () => {
    render(<TextBox />);
    const ingredientInput = screen.getByPlaceholderText(/Enter ingredient/i);
    fireEvent.change(ingredientInput, { target: { value: "Rice" } });
    expect(ingredientInput.value).toBe("Rice");
  });

  test("should have empty input after add button is clicked", async () => {
    render(<TextBox />);
    const ingredientInput = screen.getByPlaceholderText(/Enter ingredient/i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(ingredientInput, { target: { value: "Rice" } });
    fireEvent.click(buttonElement);
    expect(ingredientInput.value).toBe("");
  });

  test("should render same ingredient passed into textbox", async () => {
    render(<TextBox />);
    const ingredientInput = screen.getByPlaceholderText(/Enter ingredient/i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(ingredientInput, { target: { value: "Salt" } });
    fireEvent.click(buttonElement);
    const listElement = screen.getByText(/Salt/i);
    expect(listElement).toBeInTheDocument();
  });

  test("should render multiple ingredients passed into textbox", async () => {
    render(<TextBox />);
    addIngredient(["Salt", "Flour", "Honey", "Apple"]);
    const listElements = screen.getAllByTestId("ingredients-list");
    expect(listElements.length).toBe(4);
  });
});
