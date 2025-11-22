import { Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Componente de listagem de séries utilizando Material UI.
 *
 * Props:
 * - series: lista de séries retornadas da API
 * - removeSerie: função que remove uma série (DELETE)
 */
export default function SerieList({ series, removeSerie }) {
  if (!series || series.length === 0) {
    return <p>Nenhuma série cadastrada ainda.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {series.map((serie) => (
        <Card
          key={serie.id}
          sx={{
            backgroundColor: "#ffe6f2",
            padding: 2,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <h2 style={{ marginBottom: 10 }}>{serie.titulo}</h2>

            <p>Temporadas: {serie.temporadas}</p>
            <p>Diretor: {serie.diretor}</p>
            <p>Produtora: {serie.produtora}</p>
            <p>Categoria: {serie.categoria}</p>

            <p>
              Lançamento:{" "}
              {serie.dataLancamento
                ? new Date(serie.dataLancamento).toLocaleDateString()
                : "—"}
            </p>

            <p>
              Assistiu em:{" "}
              {serie.dataAssistiu
                ? new Date(serie.dataAssistiu).toLocaleDateString()
                : "—"}
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`/editar/${serie.id}`}
              >
                Editar
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => removeSerie(serie.id)}
              >
                Excluir
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
