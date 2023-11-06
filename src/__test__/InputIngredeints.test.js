import { render, screen, fireEvent} from '@testing-library/react';
import IngredientsInput from '../Components/IngredientsInput';


describe("Test for Ingredient Input", () => {

    describe("Input should be displayed", () => {
        it("Should display default name input element", async () => {
            render(
                <IngredientsInput />
            );
        const inputElement = screen.getByPlaceholderText(/Add ingredient/i)
        expect(inputElement).toBeInTheDocument();
        }); 

        it("Should display default amount input element", async () => {
            render(
                <IngredientsInput />
            );
        const inputElement = screen.getByPlaceholderText(/Measurement/i)
        expect(inputElement).toBeInTheDocument();
        }); 
    })

    describe("Display user input into textbox", () => {
        it("Should display user ingredient input element", async () => {
            render(
                <IngredientsInput />
            );
        const inputElement = screen.getByPlaceholderText(/Add ingredient/i)
        fireEvent.change(inputElement, {target: {value: "Apple"} })
        expect(inputElement.value).toBe("Apple");
        });

        it("Should display user amount input element", async () => {
            render(
                <IngredientsInput />
            );
        const inputElement = screen.getByPlaceholderText(/Measurement/i)
        fireEvent.change(inputElement, {target: {value: "2"} })
        expect(inputElement.value).toBe("2");
        }); 

    })

    describe("Reset input boxes back to default after adding", () => {
        it("Both ingredient and measurement boxes are back to default", async () => {
            render(
                <IngredientsInput />
            );
        const inputElement = screen.getByPlaceholderText(/Add ingredient/i)
        const amountElement = screen.getByPlaceholderText(/Measurement/i)
        const buttonElement = screen.getByRole("button", {name: /Add/i});
        fireEvent.change(inputElement, {target: {value: "Apple"} })
        fireEvent.change(amountElement, {target: {value: "2"} })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
        expect(amountElement.value).toBe("");
        });

    })


    

}) 