import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import IngredientInput from "./IngredientInput";

describe("rendering", () => {
  it("renders ingredient input box", () => {
    render(<IngredientInput />);
    const ingredientInput = screen.getByLabelText("Enter an Ingredient");

    expect(ingredientInput).toBeInTheDocument();
  });

  it("renders ingredient input subboxes", async () => {
    render(<IngredientInput />);
    const ingredientInput = screen.getByLabelText("Enter an Ingredient");

    // trigger subpanel to render
    fireEvent.change(ingredientInput, {
      target: { value: "Quality Eggs for Testing" },
    });
    fireEvent.keyDown(ingredientInput, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      const amountInput = screen.getByLabelText("amount");
      expect(amountInput).toBeInTheDocument();
    });

    await waitFor(() => {
      const unitInput = screen.getByLabelText("unit");
      expect(unitInput).toBeInTheDocument();
    });
  });
});

describe("inputting an ingredient", () => {
  it("allows adding an ingredient", async () => {
    render(<IngredientInput />);

    // type in the ingredient name
    const nameInput = screen.getByPlaceholderText("ex: eggs, milk...");
    fireEvent.change(nameInput, {
      target: { value: "Quality Milk for Testing" },
    });
    fireEvent.keyDown(nameInput, { key: "Enter", code: "Enter" });
    expect(nameInput.value).toBe("Quality Milk for Testing");

    let amountInput;
    await waitFor(() => {
      amountInput = screen.getByPlaceholderText("ex: 10...");
      expect(amountInput).toBeInTheDocument();
    });

    // type in the amount
    amountInput = screen.getByPlaceholderText("ex: 10...");
    fireEvent.change(amountInput, { target: { value: "2" } });

    // type in the unit
    const unitInput = screen.getByPlaceholderText("ex: lb, oz...");
    fireEvent.change(unitInput, { target: { value: "gallons" } });

    // click the add button
    const addButton = screen.getByText(/^Add /);
    fireEvent.click(addButton);

    // assert that the ingredient appears onscreen
    await waitFor(() => {
      const ingredientList = screen.getByRole("list");
      expect(ingredientList).toBeInTheDocument();
    });

    const testItem = screen.getByRole("listitem");
    expect(testItem).toBeInTheDocument();
  });
});
