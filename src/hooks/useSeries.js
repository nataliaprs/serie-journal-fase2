/**
 * useSeries
 * Hook responsável por integrar com a API (json-server).
 * Endpoints:
 *  - GET    /series
 *  - POST   /series
 *  - PUT    /series/:id
 *  - DELETE /series/:id
 * Cada função atualiza o estado global de 'series' após concluir a operação.
 */

import { useEffect, useState } from "react";
import api from "../services/api";

export function useSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function fetchSeries() {
    try {
      setLoading(true);
      const res = await api.get("/series");
      setSeries(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      console.error("Erro ao carregar séries:", e);
      setErro("Erro ao carregar séries.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSeries();
  }, []);

  async function addSerie(serie) {
    try {
      setLoading(true);

      const payload = {
        titulo: serie.titulo,
        temporadas: Number(serie.temporadas),
        dataLancamento: serie.dataLancamento || "",
        diretor: serie.diretor || "",
        produtora: serie.produtora || "",
        categoria: serie.categoria || "",
        dataAssistiu: serie.dataAssistiu || "",
      };

      await api.post("/series", payload);
      await fetchSeries();
    } catch (e) {
      console.error("Erro ao cadastrar série:", e);
      setErro("Erro ao cadastrar série.");
    } finally {
      setLoading(false);
    }
  }

  async function updateSerie(serie) {
    try {
      setLoading(true);

      const payload = {
        titulo: serie.titulo,
        temporadas: Number(serie.temporadas),
        dataLancamento: serie.dataLancamento || "",
        diretor: serie.diretor || "",
        produtora: serie.produtora || "",
        categoria: serie.categoria || "",
        dataAssistiu: serie.dataAssistiu || "",
      };

      await api.put(`/series/${serie.id}`, payload);
      await fetchSeries();
    } catch (e) {
      console.error("Erro ao atualizar série:", e);
      setErro("Erro ao atualizar série.");
    } finally {
      setLoading(false);
    }
  }

  async function removeSerie(id) {
    try {
      setLoading(true);
      await api.delete(`/series/${id}`);
      await fetchSeries();
    } catch (e) {
      console.error("Erro ao remover série:", e);
      setErro("Erro ao remover série.");
    } finally {
      setLoading(false);
    }
  }

  return {
    series,
    loading,
    erro,
    addSerie,
    updateSerie,
    removeSerie,
    fetchSeries,
  };
}