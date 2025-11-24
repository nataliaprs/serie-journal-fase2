
import React from "react";
import SerieForm from "./SerieForm";

export default function Cadastrar({ addSerie }) {
  // Sem o <main> para não interferir no layout (fica encostado na NavBar)
  return <SerieForm onSave={addSerie} />;
}