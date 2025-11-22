import { useEffect } from "react";
import SerieList from "../components/SerieList/SerieList";
import { api } from "../services/api";

export default function Lista({ series, setSeries, setEditingSerie }) {
  useEffect(() => {
    async function carregarSeries() {
      try {
        const response = await api.get("/series");
        setSeries(response.data);
      } catch (erro) {
        console.error("Erro ao carregar séries", erro);
      }
    }
    carregarSeries();
  }, [setSeries]);

  return (
    <div className="page-center">
      <h1>Lista de Séries</h1>
      <SerieList
        series={series}
        setSeries={setSeries}
        setEditingSerie={setEditingSerie}
      />
    </div>
  );
}

