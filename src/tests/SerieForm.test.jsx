import { render, screen, fireEvent } from "@testing-library/react";
import SerieForm from "../pages/SerieForm";

describe("SerieForm", () => {
  it("renderiza campos obrigatórios", () => {
    render(<SerieForm />);

    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/número de temporadas/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/diretor/i)).toBeInTheDocument();
  });

  it("permite digitar no campo título", () => {
    render(<SerieForm />);

    const input = screen.getByLabelText(/título/i);
    fireEvent.change(input, { target: { value: "Breaking Bad" } });

    expect(input.value).toBe("Breaking Bad");
  });
});
