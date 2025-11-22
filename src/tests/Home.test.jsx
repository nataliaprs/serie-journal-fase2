import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home Page", () => {
  it("deve renderizar o título da página inicial", () => {
    render(<Home />);
    expect(screen.getByText(/bem-vindo/i)).toBeInTheDocument();
  });
});