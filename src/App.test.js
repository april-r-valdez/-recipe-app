import { render} from '@testing-library/react';
import App from './App';
import Home from './components/Home';

test('TEST APP holds the Home component', () => {
    const { container } = render(<App />);
    const appDiv = container.querySelector('.App');
    expect(appDiv).toBeInTheDocument();
});
