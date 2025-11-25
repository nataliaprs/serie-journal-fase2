/**
 * useSeries
 * Integração com a API (json-server).
 * Endpoints suportados:
 *  - GET    /series
 *  - POST   /series
 *  - PUT    /series/:id  (padrão json-server)
 *  - PUT    /series      (fallback com id no body, conforme enunciado)
 *  - DELETE /series/:id
 *
 * Estratégia:
 *  - Atualização otimista no updateSerie (reflete na UI antes do servidor).
 *  - Após cada operação, sincroniza a lista com fetchSeries().
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

      // Atualização otimista: reflete na UI imediatamente
      setSeries((prev) =>
        prev.map((s) => (s.id === serie.id ? { ...s, ...payload, id: serie.id } : s))
      );

      // 1) Tenta PUT em /series/:id (json-server padrão)
      try {
        await api.put(`/series/${serie.id}`, payload);
      } catch (e) {
        // 2) Fallback: PUT em /series com id no body (conforme enunciado)
        if (!e.response || (e.response && e.response.status >= 400)) {
          await api.put(`/series`, { id: serie.id, ...payload });
        }
      }

      // Sincroniza com o servidor para garantir consistência
      await fetchSeries();
    } catch (e) {
      console.error("Erro ao atualizar série:", e);
      setErro("Erro ao atualizar série.");
      // Em caso de erro, força sincronização
      await fetchSeries();
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