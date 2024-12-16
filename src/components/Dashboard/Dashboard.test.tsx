import * as React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

// Mock the console log for the form submission
jest.spyOn(console, "log").mockImplementation(() => {});

describe("Login Component", () => {
  it("renders the login page with all elements", () => {
    render(<Dashboard />);
  });
});
