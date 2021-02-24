import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import utils from "../src/__mocks__/utils";

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

	test("user can add a task to the task tracker ", async () => {
		const { getByRole, getByText, getByPlaceholderText, debug } = render(<App />);
		expect(getByRole("button", { name: /toggle/i})).toBeInTheDocument();
		userEvent.click(getByText(/add/i));
		userEvent.type(screen.getByRole("textbox", { name: /task/i }),"Go for a walk!");
    userEvent.type(screen.getByPlaceholderText("Add Day & Time"), "Feb 12 at 11:00am");
    await waitFor(() => expect(getByText("Feb 12 at 11:00am")).toBeInTheDocument());
	});

	test("user can add day and time to a task", () => {
		const { getByRole, debug } = render(<App />);
		fireEvent.click(getByRole("button", { name: /toggle/i }));
		expect(screen.getByRole("textbox", { name: /day & time/i })).toBeInTheDocument();
		userEvent.type(screen.getByRole("textbox", { name: /day & time/i }),"Feb 12 at 11:00am");
		expect(screen.getByRole("textbox", { name: /day & time/i })).toHaveValue("Feb 12 at 11:00am");
	});

	test("user can save a task", () => {
		const { getByRole, debug } = render(<App />);
		fireEvent.click(getByRole("button", { name: /toggle/i }));
		userEvent.type(screen.getByRole("textbox", { name: /task/i }),"Go cycling");
		fireEvent.click(getByRole("button", { name: /save task/i }));	
	});

	test.only("without live server running ", async () => {
		const { getByRole, getByText, debug } = render(<App />);
    debug()

	


	  //expect(getByRole("button", { name: /toggle/i})).toBeInTheDocument();
		// userEvent.type(screen.getByRole("textbox", { name: /task/i }),"Go for a walk!");
    // userEvent.type(screen.getByPlaceholderText("Add Day & Time"), "Feb 12 at 11:00am");
    // await waitFor(() => expect(getByText("Feb 12 at 11:00am")).toBeInTheDocument());
	});

});

