import React from "react";
import SerieForm from "./SerieForm";

export default function Cadastrar({ addSerie }) {
  return (
    <main>
      <SerieForm onSave={addSerie} />
    </main>
  );
}