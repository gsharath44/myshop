import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MyShop text', () => {
  render(<App />);
  const linkElement = screen.getByText(/MyShop/i);
  expect(linkElement).toBeInTheDocument();
});
