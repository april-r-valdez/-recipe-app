
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import UserInput from '../UserInput';
import Ingredient from '../Ingredient';
import Amount from '../Amount';
import Units from '../Units';
import Pantry from '../Pantry';

afterEach(() => {
    cleanup();
});


describe("UserInput", () => {
    test('test1', () => {
        render(<UserInput/>);
        const textbox = screen.getByRole("textbox");
        expect(textbox).toBeInTheDocument();
    });
    
    test('test2', () => {
        render(<UserInput/>);
        const spinButton = screen.getByRole("spinbutton");
        expect(spinButton).toBeInTheDocument();
    });
    
    test('test3', () => {
        render(<UserInput/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
})


describe("Ingredient", () => {
    test('should render ingredient element', () => {
        render(<Ingredient inputs={[]} handleChange={() => {}}/>);
        const ingredientElement = screen.getByPlaceholderText("Ex: eggs, milk, butter...");
        expect(ingredientElement).toBeInTheDocument();
    });

    test('should be able to type ingredient', () => {
        render(<Ingredient inputs={[]} handleChange={() => {}}/>);
        const ingredientElement = screen.getByPlaceholderText("Ex: eggs, milk, butter...");
        fireEvent.change(ingredientElement, { target: {value: "Milk"} });
        expect(ingredientElement.value).toBe("Milk");
    });

    // test('should have empty input when submit button is clicked', () => {
    //     render(<Ingredient inputs={[]} handleChange={() => {}}/>);
    //     const inputElement = screen.getByPlaceholderText("Ex: eggs, milk, butter...");
    //     const buttonElement = screen.getByRole("button");
    //     fireEvent.change(inputElement, { target: {value: "Milk"} });
    //     fireEvent.click(buttonElement);
    //     expect(inputElement.value).toBe("");
    // });
})

describe("Amount", () => {
    test('should render amount element', () => {
        render(<Amount inputs={[]} handleChange={() => {}}/>);
        const amountElement = screen.getByPlaceholderText("Ex: 1 egg, 2 cups,...");
        expect(amountElement).toBeInTheDocument();
    });

    // test('should be able to type in input', () => {
    //     render(<Ingredient inputs={[]} handleChange={() => {}}/>);
    //     const amountElement = screen.getByPlaceholderText("Ex: 1 egg, 2 cups,...");
    //     fireEvent.change(amountElement, { target: {value: "5"} });
    //     expect(amountElement.value).toBe("5");
    // });
})

describe("Units", () => {
    test('should render units element', () => {
        render(<Units inputs={[]} handleChange={() => {}}/>);
        expect(true).toBe(true);
    });
})

describe("Pantry", () => {
    test('should render pantry element', () => {
        render(<Pantry ingredientsList={[]}/>);
        expect(true).toBe(true);
    });
})

