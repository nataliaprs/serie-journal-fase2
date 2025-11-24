import React from "react";
import { render, screen } from "@testing-library/react";
import Sobre from "../pages/Sobre";

describe("Página Sobre", () => {
  it("renderiza informações do projeto", () => {
    render(<Sobre />);
    expect(screen.getByRole("heading", { name: /projeto/i })).toBeInTheDocument();
  });
});
