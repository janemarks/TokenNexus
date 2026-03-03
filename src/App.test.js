// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenNexus/i);
    expect(titleElement).toBeInTheDocument();
});
