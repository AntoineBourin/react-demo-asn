import { render, screen } from "@testing-library/react";
import { useProducts } from "../hook/useProducts";
import MyComponentWithApi from "./MyComponentWithApi";

vi.mock("../hook/useProducts");

describe("My component with api", () => {
  it("render with a loading state", async () => {
    vi.mocked(useProducts).mockReturnValue({
      products: [],
      isLoading: true,
      hasError: false,
    });

    render(<MyComponentWithApi />);

    const text = await screen.findByText("Chargement...");
    expect(text).toBeInTheDocument();
  });

  it("render with a loading state", async () => {
    vi.mocked(useProducts).mockReturnValue({
      products: [{ id: 10, title: "Test" }],
      isLoading: false,
      hasError: false,
    });

    render(<MyComponentWithApi />);

    const text = await screen.findByText("Test");
    expect(text).toBeInTheDocument();
  });
});
