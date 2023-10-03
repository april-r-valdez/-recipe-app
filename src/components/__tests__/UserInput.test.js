
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
        const spinButton = screen.getByRole("spinbutton");
        const button = screen.getByRole("button");
        expect(textbox).toBeInTheDocument();
        expect(spinButton).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    test('test2', () => {
        render(<UserInput/>);
        render(<Ingredient inputs={[]} handleChange={() => {}}/>);
        render(<Amount inputs={[]} handleChange={() => {}}/>);
        render(<Units inputs={[]} handleChange={() => {}}/>);
        const ingredientElement = screen.getByLabelText('Ingredient:');
        const amountElement = screen.getByLabelText('Amount:');
        const unitsElement = screen.getByLabelText('Units:');
        const addButton = screen.getByText("Add ingredient");

        fireEvent.change(ingredientElement, { target: { value: 'Test Ingredient' } });
        fireEvent.change(amountElement, { target: { value: 'Test Amount' } });
        fireEvent.change(unitsElement, { target: { value: 'Test Units' } });
        fireEvent.click(addButton);

    });
})

describe("Ingredient", () => {
    test('should render ingredient element', () => {
        render(<Ingredient inputs={[]} handleChange={() => {}}/>);
        const ingredientElement = screen.getByLabelText('Ingredient:');
        expect(ingredientElement).toBeInTheDocument();
        expect(ingredientElement).toHaveAttribute('type', 'text');
        expect(ingredientElement).toHaveAttribute('name', 'ingredient');
        expect(ingredientElement).toHaveAttribute('required');
        expect(ingredientElement).toHaveValue('');

        const placeholderText = screen.getByPlaceholderText("Ex: eggs, milk, butter...");
        expect(placeholderText).toBeInTheDocument();
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
        const amountElement = screen.getByLabelText('Amount:');
        expect(amountElement).toBeInTheDocument();
        expect(amountElement).toHaveAttribute('type', 'number');
        expect(amountElement).toHaveAttribute('name', 'amount');
        expect(amountElement).toHaveAttribute('min', '1');
        expect(amountElement).toHaveAttribute('required');

        const placeholderText = screen.getByPlaceholderText("Ex: 1 egg, 2 cups,...");
        expect(placeholderText).toBeInTheDocument();
    });

    test('should be able to type amount', () => {
        render(<Amount inputs={[]} handleChange={() => {}}/>);
        const amountElement = screen.getByPlaceholderText("Ex: 1 egg, 2 cups,...");
        fireEvent.change(amountElement, { target: {value: "5"} });
        expect(amountElement.value).toBe("5");
    });
})

describe("Units", () => {
    test('should render units element', () => {
        render(<Units inputs={[]} handleChange={() => {}}/>);
        const unitsElement = screen.getByLabelText('Units:');
        expect(unitsElement).toBeInTheDocument();
        expect(unitsElement).toHaveAttribute('name', 'units');
    });

    test('should be able to select units', () => {
        render(<Units inputs={[]} handleChange={() => {}}/>);
        const unitsElement = screen.getByLabelText('Units:');
        fireEvent.change(unitsElement, { target: {value: "cups"} });
        expect(unitsElement.value).toBe("cups");

    });
})

describe("Pantry", () => {

    const ingredientsList = [
        {ingredient: 'Flour', amount: 2, units: 'cups'},
        // {ingredient: 'Butter', amount: 4, units: 'tbsp'}
    ];

    test('should render pantry element', () => {
        const {getByText} = render(<Pantry ingredientsList={[]}/>);
        const headingElement = getByText("Your Pantry:");
        expect(headingElement).toBeInTheDocument();
    });
})

