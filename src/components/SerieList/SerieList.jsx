import { Button, Paper } from "@mui/material";
import "./SerieList.css";

export default function SerieList({ series, removeSerie }) {
  return (
    <div className="lista-container">
      {series.map((serie) => (
        <Paper key={serie.id} className="serie-card" elevation={6}>
          <h3>{serie.titulo}</h3>
          <p><strong>Temporadas:</strong> {serie.temporadas}</p>
          <p><strong>Lançamento:</strong> {serie.dataLancamento}</p>
          <p><strong>Diretor:</strong> {serie.diretor}</p>

          <div className="botoes">
            <Button
              variant="contained"
              sx={{ background: "#444", ":hover": { background: "#666" } }}
              href={`/editar/${serie.id}`}
            >
              Editar
            </Button>

            <Button
              variant="contained"
              sx={{ background: "#333", ":hover": { background: "#555" } }}
              onClick={() => removeSerie(serie.id)}
            >
              Excluir
            </Button>
          </div>
        </Paper>
      ))}
    </div>
  );
}

