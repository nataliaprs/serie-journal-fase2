import React from "react";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * SerieList
 * - Independente de Router: navegação é opcional via prop navigateFn (noop por padrão).
 * - Cards compactos, conteúdo à esquerda e ações à direita.
 */
function formatDate(iso) {
  if (!iso) return "-";
  const [y, m, d] = String(iso).split("-");
  if (!y || !m || !d) return iso;
  return `${d}/${m}/${y}`;
}

export default function SerieList({ series, removeSerie, navigateFn = () => {} }) {
  const goEdit = (id) => {
    try {
      navigateFn && navigateFn(`/editar/${id}`);
    } catch {
      // se não tiver router em testes, ignora
    }
  };

  if (!series || series.length === 0) {
    return (
      <Typography align="center" color="#eee">
        Nenhuma série cadastrada
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(360px, 420px))",
        gap: 2,
        justifyContent: "center",
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      {series.map((s) => (
        <Card
          key={s.id}
          sx={{
            display: "flex",
            alignItems: "stretch",
            bgcolor: "rgba(0,0,0,0.60)",
            color: "#fff",
            borderRadius: 2,
            minHeight: 140,
            p: 1,
          }}
        >
          {/* Conteúdo (esquerda) */}
          <CardContent sx={{ flex: 1, py: 1, pr: 0.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {s.titulo}
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              <strong>Temporadas:</strong> {s.temporadas ?? "-"}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              <strong>Lançamento:</strong> {formatDate(s.dataLancamento)}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              <strong>Diretor:</strong> {s.diretor || "-"}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              <strong>Produtora:</strong> {s.produtora || "-"}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              <strong>Categoria:</strong> {s.categoria || "-"}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              <strong>Assistiu em:</strong> {formatDate(s.dataAssistiu)}
            </Typography>
          </CardContent>

          {/* Ações (direita) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
              px: 1,
              minWidth: 64,
            }}
          >
            <IconButton
              aria-label="editar"
              onClick={() => goEdit(s.id)}
              size="small"
              sx={{ color: "#7aa2ff" }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="excluir"
              onClick={() => removeSerie(s.id)}
              size="small"
              sx={{ color: "#ff7a7a" }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>
  );
}