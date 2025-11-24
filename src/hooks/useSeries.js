import { useEffect, useState } from "react";
import api from "../services/api";

/**
 * Hook useSeries
 *
 * Responsável por centralizar toda a comunicação com a API:
 * - fetchSeries(): GET /series
 * - addSerie():   POST /series
 * - updateSerie(): PUT /series
 * - removeSerie(): DELETE /series/:id
 *
 * Também controla:
 * - loading: exibe carregamento
 * - erro: mensagens de erro padronizadas
 *
 * Esse hook permite que todo o fluxo de dados da aplicação fique
 * organizado e reutilizável, cumprindo o padrão da Fase 2.
 */
export function useSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  /** GET — Carrega todas as séries */
  async function fetchSeries() {
    try {
      setLoading(true);
      setErro("");

      const res = await api.get("/series");
      setSeries(res.data || []);
    } catch (e) {
      console.error("Erro ao carregar séries:", e);
      setErro("Erro ao carregar séries.");
    } finally {
      setLoading(false);
    }
  }

  // Carrega automaticamente ao iniciar
  useEffect(() => {
    fetchSeries();
  }, []);

  /** POST — Cadastrar nova série */
  async function addSerie(serie) {
    try {
      setLoading(true);
      await api.post("/series", serie);
      await fetchSeries();
    } catch (e) {
      console.error("Erro ao adicionar série:", e);
      setErro("Erro ao cadastrar série.");
    } finally {
      setLoading(false);
    }
  }

  /** PUT — Atualizar série */
  async function updateSerie(serie) {
    try {
      setLoading(true);
      await api.put("/series", serie);
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