import SerieList from "../components/SerieList/SerieList";

export default function Lista({ series, loading, erro, removeSerie }) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Lista de Séries</h1>

      {loading && <p>Carregando séries...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {!loading && !erro && (
        <SerieList series={series} removeSerie={removeSerie} />
      )}
    </main>
  );
}

