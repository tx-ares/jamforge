import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

// Mock the console log for the form submission
jest.spyOn(console, "log").mockImplementation(() => {});

describe("Login Component", () => {
  it("renders the login page with all elements", () => {
    render(<Login />);

    // Check if the heading is rendered
    expect(screen.getByText(/JamForge Login/i)).toBeDefined();

    // Check if the email input is rendered
    expect(screen.getByLabelText(/Email/i)).toBeDefined();

    // Check if the password input is rendered
    expect(screen.getByLabelText(/Password/i)).toBeDefined();

    // Check if the login button is rendered
    expect(screen.getByRole("button", { name: /Log In/i })).toBeDefined();
  });

  it("allows the user to type into the email and password fields", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    // Simulate typing into the inputs
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Assert the inputs have the correct values
    expect(emailInput).toEqual("test@example.com");
    expect(passwordInput).toEqual("password123");
  });

  it("submits the form and calls the console log", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole("button", { name: /Log In/i });

    // Simulate typing into the inputs
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Simulate clicking the login button
    fireEvent.click(loginButton);

    // Check if console.log was called
    expect(console.log).toHaveBeenCalledWith("Form submitted");
  });
});
