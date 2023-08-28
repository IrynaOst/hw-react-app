import { render, screen } from '@testing-library/react';
import App from './App';

it('renders texts "List of users" and "Users"', () => {
  render(<App />);
  const listTextElement = screen.getByText(/List of users/i);
  const usersTextElements = screen.getAllByText(/Users/gi);

  expect(listTextElement).toBeInTheDocument();
  expect(usersTextElements.length).toBeGreaterThan(0);
});
