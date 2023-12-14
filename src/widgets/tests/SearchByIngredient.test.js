import { fireEvent, render, screen } from '@testing-library/react';
import InputIngredient from '../components/InputIngredient';

//Test if the Generate Reciepe card is present
test('renders Input Ingredient component', () => {
  render(<InputIngredient />);
  const cardDiv = screen.getByText('GENERATE RECIEPE');
  expect(cardDiv).toBeInTheDocument();
});

describe("Add Ingredient event", () => {
    
    // Test if the input box changes as the user type
    it("Enter the name of ingredient", async() => {
        render(<InputIngredient />);
        
        const inputElement = screen.getByPlaceholderText(/Add ingredient/i);
        fireEvent.change(inputElement, {target: {value: "Butter"} })
        expect(inputElement.value).toBe("Butter");
    })

    it("Input text box clears after ADD button is pressed", async() => {
        render(<InputIngredient />);
        
        const inputElement = screen.getByPlaceholderText(/Add ingredient/i);
        const buttonElement = screen.getByRole("button", {name: /ADD/i})
        fireEvent.change(inputElement, {target: {value: "Butter"} })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    })
})
