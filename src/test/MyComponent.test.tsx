import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";
import userEvent from "@testing-library/user-event";

describe("My component", () => {
  it("render with a title", async () => {
    render(<MyComponent />);

    const title = await screen.findByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
  });

  it("increment the counter", async () => {
    render(<MyComponent />);

    const counter = await screen.findByText("Compteur : 0");
    expect(counter).toBeInTheDocument();

    const button = await screen.findByText("Ajouter");

    const user = userEvent.setup();
    await user.click(button);

    const updatedCounter = await screen.findByText("Compteur : 1");
    expect(updatedCounter).toBeInTheDocument();
  });
});
