import { useEffect, useState } from "react";
import api from "../services/api";

/**
 * Hook responsável por:
 * - Buscar séries (GET)
 * - Criar série (POST)
 * - Atualizar série (PUT)
 * - Remover série (DELETE)
 * - Controlar loading e erro
 */

export function useSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  // ✔ Carregar todas as séries ao iniciar o componente
  async function fetchSeries() {
    try {
      setLoading(true);
      const res = await api.get("/series");
      setSeries(res.data);
    } catch (err) {
      setErro("Erro ao carregar séries.");
    } finally {
      setLoading(false);
    }
  }

  // Carrega na primeira vez
  useEffect(() => {
    fetchSeries();
  }, []);

  // ✔ Criar série
  async function addSerie(serie) {
    await api.post("/series", serie);
    fetchSeries(); // recarrega lista
  }

  // ✔ Atualizar série
  async function updateSerie(serie) {
    await api.put("/series", serie);
    fetchSeries();
  }

  // ✔ Remover série
  async function removeSerie(id) {
    await api.delete(`/series/${id}`);
    fetchSeries();
  }

  return {
    series,
    loading,
    erro,
    addSerie,
    updateSerie,
    removeSerie,
    fetchSeries
  };
}