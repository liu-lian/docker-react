import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I am changed/i);
  expect(linkElement).toBeInTheDocument();
});

test('dummy test 1', () => {
});

