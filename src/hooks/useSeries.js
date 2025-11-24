/**
 * Hook useSeries
 *
 * Controla toda comunicação com a API (json-server):
 *  GET    /series
 *  POST   /series
 *  PUT    /series/:id
 *  DELETE /series/:id
 */

import { useEffect, useState } from "react";
import api from "../services/api";

export function useSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  /** GET — Buscar todas as séries */
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

  /** POST — Cadastrar nova série */
  async function addSerie(serie) {
    try {
      setLoading(true);

      const payload = {
        titulo: serie.titulo,
        temporadas: Number(serie.temporadas),
        dataLancamento: serie.dataLancamento,
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

  /** PUT — Atualizar série (CORRETO: /series/:id) */
  async function updateSerie(serie) {
    try {
      setLoading(true);

      const payload = {
        titulo: serie.titulo,
        temporadas: Number(serie.temporadas),
        dataLancamento: serie.dataLancamento,
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

  /** DELETE — Remover série */
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