import { render, screen, debug, rerender } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'
import Header from "./Header"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/"
  })
}));

test('Header component', () => {
  const textTitle = "Testing stuff"
  const { rerender } = render(<Header/>);
  expect(screen.queryByText(textTitle)).not.toBeInTheDocument();
  rerender(<Header title={textTitle}/>)
  expect(screen.getByText(textTitle)).toBeInTheDocument();
});