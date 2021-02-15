import { render, screen, debug, fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'
import Button from "./Button"
 
describe('Button', () => {
  test('renders button component', () => {
    render(<Button color="pink" text="Click Me"/>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(screen.getByRole('button')).not.toBe('disabled')
  });
});
