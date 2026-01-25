import { render, screen, cleanup } from "@testing-library/react";
import { Button } from "../ui/button";

afterEach(cleanup);

describe("Button Component", () => {
  test("renders button", () => {
    render(<Button>Click Me!</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders correct text", () => {
    render(<Button>Click Me!</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me!");
  });
});
