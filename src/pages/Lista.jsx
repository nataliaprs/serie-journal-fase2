import React, { useEffect } from "react";
import SerieList from "../components/SerieList/SerieList";

export default function Lista({ series, removeSerie, fetchSeries }) {
  useEffect(() => {
    // chama só uma vez ao montar a página
    fetchSeries?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ padding: "20px", paddingTop: "70px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20, color: "white" }}>
        Lista de Séries
      </h1>
      <SerieList series={series} removeSerie={removeSerie} />
    </main>
  );
}
