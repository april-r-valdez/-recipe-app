
import { render, screen, cleanup } from '@testing-library/react';
import UserInput from '../UserInput';

afterEach(() => {
    cleanup();
});

test('test', () => {
    expect(true).toBe(true);
    render(<UserInput/>);
    // const inputElement = screen.getByText();
    // expect(inputElement).toBeInTheDocument();
    // const todoElement = screen.getByTestId('1');
    // expect(todoElement).toBeInTheDocument();
});