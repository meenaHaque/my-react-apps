import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import App from "./App";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useLocation: () => ({
		pathname: "/",
	}),
}));

describe("Task Tracker ", () => {
	test.skip("task tracker is loaded", () => {
		const { queryByLabelText, getByRole, debug } = render(<App />);
		expect(screen.queryByLabelText("Task")).not.toBeInTheDocument();
	});

	test.only("user can add a task to the task tracker ", () => {
		const { getByRole, getByText, getByPlaceholderText, debug } = render(<App />);
		expect(getByRole("button", { name: /toggle/i})).toBeInTheDocument();
		userEvent.click(getByText(/add/i));
		userEvent.type(screen.getByRole("textbox", { name: /task/i }),"Go for a walk!");
    userEvent.type(screen.getByPlaceholderText("Add Day & Time"), "Feb 12 at 11:00am");
		//userEvent.click(getByRole("button", { name: /save task/i }));
    expect(getByText("Feb 12 at 11:00am")).toBeInTheDocument();


		// expect(screen.getByRole("textbox", { name: /task/i })).toBeInTheDocument();
		// userEvent.type(screen.getByRole("textbox", { name: /task/i }),"Go for a walk!");
		// expect(screen.getByRole("textbox", { name: /task/i })).toHaveValue("Go for a walk!");
	});

	test("user can add day and time to a task", () => {
		const { getByRole, debug } = render(<App />);
		fireEvent.click(getByRole("button", { name: /toggle/i }));
		expect(screen.getByRole("textbox", { name: /day & time/i })).toBeInTheDocument();
		userEvent.type(screen.getByRole("textbox", { name: /day & time/i }),"Feb 12 at 11:00am");
		expect(screen.getByRole("textbox", { name: /day & time/i })).toHaveValue("Feb 12 at 11:00am");
		debug()
	});

	test("user can save a task", () => {
		const { getByRole, debug } = render(<App />);
		fireEvent.click(getByRole("button", { name: /toggle/i }));
		userEvent.type(screen.getByRole("textbox", { name: /task/i }),"Go cycling");
		fireEvent.click(getByRole("button", { name: /save task/i }));	
	});
});

