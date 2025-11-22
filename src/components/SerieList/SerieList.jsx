import React from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export default function SerieList({ series = [], setSeries, setEditingSerie }) {
  async function handleDelete(id) {
    if (!confirm("Deseja realmente excluir essa série?")) return;

    try {
      await api.delete(`/series/${id}`);
      setSeries(prev => prev.filter(s => s.id !== id));
    } catch (erro) {
      alert("Erro ao excluir série!");
      console.error(erro);
    }
  }

  return (
    <section className="serie-list">
      <ul className="serie-list-ul">
        {series.length === 0 ? (
          <li className="serie-empty">Nenhuma série cadastrada.</li>
        ) : (
          series.map(s => (
            <li key={s.id} className="serie-item">
              <div className="serie-line">
                <span className="serie-text">
                  {s.title}
                  {s.numTemporadas && ` — ${s.numTemporadas} temporadas`}
                  {s.dataLancamento && ` — ${s.dataLancamento}`}
                  {s.diretor && ` — ${s.diretor}`}
                  {s.produtora && ` — ${s.produtora}`}
                  {s.categoria && ` — ${s.categoria}`}
                  {s.dataAssistiu && ` — ${s.dataAssistiu}`}
                </span>
                <span className="serie-controls">
                  <button className="btn small" onClick={() => setEditingSerie(s)}>
                    Editar
                  </button>
                  <button className="btn small danger" onClick={() => handleDelete(s.id)}>
                    Excluir
                  </button>
                </span>
              </div>
              <hr className="serie-separator" />
            </li>
          ))
        )}
      </ul>
    </section>
  );
}