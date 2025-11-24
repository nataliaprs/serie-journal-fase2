import { Button, Paper } from "@mui/material";
import "./SerieList.css";

/**
 * SerieList
 * - Recebe `series` (array) e `removeSerie` (function) via props.
 * - Exibe um card por série. Se a lista estiver vazia, exibe uma mensagem clara.
 * - Botões: Editar (navega para /editar/:id via href) e Excluir (chama removeSerie).
 *
 * Observações de acessibilidade:
 * - Cada botão tem texto descritivo.
 * - Semclick handlers inline com descrições.
 */
export default function SerieList({ series = [], removeSerie = () => {} }) {
  // Garantia defensiva: series sempre será um array
  const lista = Array.isArray(series) ? series : [];

  if (lista.length === 0) {
    return (
      <main style={{ padding: 20 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Paper elevation={3} style={{ padding: 20, background: "rgba(0,0,0,0.55)", color: "white" }}>
            <h2 style={{ marginTop: 0 }}>Lista de Séries</h2>
            <p role="status" aria-live="polite">Nenhuma série cadastrada.</p>
          </Paper>
        </div>
      </main>
    );
  }

  return (
    <div className="lista-container" aria-live="polite">
      {lista.map((serie) => (
        <Paper key={serie.id} className="serie-card" elevation={6} component="article" aria-label={`Série ${serie.titulo}`}>
          <h3>{serie.titulo}</h3>
          <p><strong>Temporadas:</strong> {serie.temporadas}</p>
          <p><strong>Lançamento:</strong> {serie.dataLancamento}</p>
          <p><strong>Diretor:</strong> {serie.diretor}</p>

          <div className="botoes">
            <Button
              variant="contained"
              sx={{ background: "#444", ":hover": { background: "#666" } }}
              href={`/editar/${serie.id}`}
              aria-label={`Editar ${serie.titulo}`}
            >
              Editar
            </Button>

            <Button
              variant="contained"
              sx={{ background: "#333", ":hover": { background: "#555" } }}
              onClick={() => {
                // confirmação simples antes de excluir
                if (window.confirm(`Remover a série "${serie.titulo}"?`)) {
                  removeSerie(serie.id);
                }
              }}
              aria-label={`Excluir ${serie.titulo}`}
            >
              Excluir
            </Button>
          </div>
        </Paper>
      ))}
    </div>
  );
}