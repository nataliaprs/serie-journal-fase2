import { useSeries } from "../hooks/useSeries";
import SerieList from "../components/SerieList/SerieList";

/**
 * Página de listagem das séries cadastradas.
 * Aqui consumimos nosso hook useSeries(), que já:
 * - busca dados da API (GET)
 * - remove séries (DELETE)
 * - controla loading e erros
 */
export default function Lista() {
  const { series, loading, error, removeSerie } = useSeries();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Séries</h1>

      {loading && <p>Carregando séries...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <SerieList series={series} removeSerie={removeSerie} />
      )}
    </div>
  );
}
