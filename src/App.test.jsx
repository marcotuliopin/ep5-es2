import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";


describe("App Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.alert = jest.fn();
    });

    test('renders the button with "Click Me" text', () => {
        render(<App />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test("renders the application description text", () => {
        render(<App />);
        const descText1 = screen.getByText(
            /This is a simple React application with a button that shows an alert when clicked./i
        );
        const descText2 = screen.getByText(
            /The button includes an image and some text, styled with CSS./i
        );
        expect(descText1).toBeInTheDocument();
        expect(descText2).toBeInTheDocument();
    });

    test("renders the logo image", () => {
        render(<App />);
        const logoImage = screen.getByAltText(/logo/i);
        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveClass("App-logo");
    });

    test("button has the correct class", () => {
        render(<App />);
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toHaveClass("App-button");
    });

    test("clicking the button triggers the alert", () => {
        render(<App />);
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        expect(global.alert).toHaveBeenCalledWith("Button clicked!");
    });
});
