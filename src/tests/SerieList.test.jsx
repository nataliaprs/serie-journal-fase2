import { render, screen } from "@testing-library/react";
import SerieList from "../components/SerieList/SerieList";

describe("SerieList", () => {
  it("mostra mensagem quando não há séries", () => {
    render(<SerieList series={[]} removeSerie={() => {}} />);
    expect(screen.getByText(/nenhuma série cadastrada/i)).toBeInTheDocument();
  });

  it("mostra lista de séries", () => {
    const mock = [
      { id: 1, titulo: "Lost", temporadas: 6 }
    ];

    render(<SerieList series={mock} removeSerie={() => {}} />);

    expect(screen.getByText(/Lost/i)).toBeInTheDocument();
  });
});
