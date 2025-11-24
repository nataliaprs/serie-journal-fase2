import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, TextField, Button } from "@mui/material";
import api from "../services/api";

/**
 * SerieForm
 * Formulário de cadastro/edição.
 * - Campos type="date" com InputLabelProps={{ shrink: true }} (MUI).
 * - Usa onSave (se vier via props) ou fallback direto na API.
 */
export default function SerieForm({ editData = null, onSave = null }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    temporadas: "",
    dataLancamento: "",
    diretor: "",
    produtora: "",
    categoria: "",
    dataAssistiu: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (editData) {
      setForm({
        titulo: editData.titulo || "",
        temporadas: editData.temporadas || "",
        dataLancamento: editData.dataLancamento || "",
        diretor: editData.diretor || "",
        produtora: editData.produtora || "",
        categoria: editData.categoria || "",
        dataAssistiu: editData.dataAssistiu || "",
      });
    }
  }, [editData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMensagem("");
    setErro("");

    try {
      if (onSave && typeof onSave === "function") {
        await onSave(editData ? { ...form, id: editData.id } : form);
      } else {
        if (editData) {
          await api.put(`/series/${editData.id}`, form);
        } else {
          await api.post("/series", form);
        }
      }

      setMensagem(editData ? "✨ Série atualizada com sucesso!" : "✨ Série cadastrada com sucesso!");
      setTimeout(() => navigate("/lista"), 900);
    } catch (err) {
      console.error(err);
      setErro("Erro ao salvar a série. Verifique os campos e tente novamente.");
    }
  }

  return (
    <section className="light-form">
      {/* Centraliza e define uma largura adequada */}
      <Box
        sx={{
          minHeight: "calc(100vh - 80px)", // altura útil descontando a NavBar
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2, // respiro lateral em telas menores
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: "100%",
            maxWidth: 640,      // ajuste aqui se quiser maior/menor (ex.: 600, 680)
            p: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
          component="div"
        >
          <h2 style={{ textAlign: "center", marginBottom: 16, color: "#222" }}>
            {editData ? "Editar Série" : "Cadastrar Série"}
          </h2>

          {mensagem && (
            <div
              role="status"
              aria-live="polite"
              style={{
                background: "#e8ffe8",
                padding: 10,
                borderRadius: 8,
                textAlign: "center",
                color: "#1e7a1e",
                marginBottom: 10,
                fontWeight: 600,
              }}
            >
              {mensagem}
            </div>
          )}

          {erro && (
            <div
              role="alert"
              style={{
                background: "#ffe0e0",
                padding: 10,
                borderRadius: 8,
                textAlign: "center",
                color: "#b30021",
                marginBottom: 10,
                fontWeight: 600,
              }}
            >
              {erro}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
            <TextField
              name="titulo"
              label="Título"
              required
              value={form.titulo}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />

            <TextField
              name="temporadas"
              label="Número de Temporadas"
              type="number"
              required
              value={form.temporadas}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />

            <TextField
              name="dataLancamento"
              label="Data de Lançamento da Temporada"
              type="date"
              value={form.dataLancamento || ""}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="dense"
            />

            <TextField
              name="diretor"
              label="Diretor"
              required
              value={form.diretor}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />

            <TextField
              name="produtora"
              label="Produtora"
              value={form.produtora}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />

            <TextField
              name="categoria"
              label="Categoria"
              value={form.categoria}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />

            <TextField
              name="dataAssistiu"
              label="Data em que assistiu"
              type="date"
              value={form.dataAssistiu || ""}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="dense"
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 1,
                py: 1.2,
                backgroundColor: "#222",
                "&:hover": { backgroundColor: "#ff4d4d" },
              }}
            >
              {editData ? "Salvar alterações" : "Cadastrar Série"}
            </Button>
          </form>
        </Paper>
      </Box>
    </section>
  );
}