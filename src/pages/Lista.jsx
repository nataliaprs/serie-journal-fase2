import React from "react";
import SerieList from "../components/SerieList/SerieList";

export default function Lista({ series, removeSerie }) {
  return (
    <main style={{ padding: "20px", paddingTop: "70px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20, color: "white" }}>
        Lista de Séries
      </h1>

      <SerieList series={series} removeSerie={removeSerie} />
    </main>
  );
}
