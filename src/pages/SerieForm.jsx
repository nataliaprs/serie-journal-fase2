import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, TextField, Button } from "@mui/material";
import api from "../services/api";

/**
 * SerieForm
 *
 * Props:
 * - editData (optional): objeto com dados para preencher o formulário no modo edição
 * - onSave (optional): função para executar a gravação (padrão: faz chamada direta à API)
 */
export default function SerieForm({ editData = null, onSave = null }) {
  let navigate = () => {};
  try {
    navigate = useNavigate();
  } catch (e) {
    navigate = () => {};
  }

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
    setErro("");
    setMensagem("");

    try {
      if (onSave && typeof onSave === "function") {
        await onSave(editData ? { ...form, id: editData.id } : form);
      } else {
        if (editData) {
          await api.put("/series", { ...form, id: editData.id });
        } else {
          await api.post("/series", form);
        }
      }

      setMensagem(editData ? "✨ Série atualizada com sucesso!" : "✨ Série cadastrada com sucesso!");

      setTimeout(() => {
        navigate("/lista");
      }, 900);
    } catch (err) {
      console.error(err);
      setErro("Erro ao salvar a série. Verifique os campos e tente novamente.");
    }
  }

  return (
    <Paper elevation={4} sx={{ padding: 4, maxWidth: 600, margin: "20px auto" }} component="section">
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
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

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
        <TextField
          name="titulo"
          label="Título"
          required
          value={form.titulo}
          onChange={handleChange}
        />

        <TextField
          name="temporadas"
          label="Número de Temporadas"
          type="number"
          required
          value={form.temporadas}
          onChange={handleChange}
        />

       <TextField
          name="dataLancamento"
          label="Data de Lançamento da Temporada"
          type="date"
          InputLabelProps={{ shrink: true, style: { color: "white" } }}   // 👈 FIXE ISSO
          value={form.dataLancamento}
          onChange={handleChange}
        />

        <TextField
          name="diretor"
          label="Diretor"
          required
          value={form.diretor}
          onChange={handleChange}
        />

        <TextField
          name="produtora"
          label="Produtora"
          value={form.produtora}
          onChange={handleChange}
        />

        <TextField
          name="categoria"
          label="Categoria"
          value={form.categoria}
          onChange={handleChange}
        />

        <TextField
          name="dataAssistiu"
          label="Data em que assisti"
          type="date"
          InputLabelProps={{ shrink: true, style: { color: "white" } }}   // 👈 FIXE ISSO
          value={form.dataAssistiu}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            padding: 1.5,
            backgroundColor: "#222",
            "&:hover": { backgroundColor: "#ff4d4d" },
          }}
        >
          {editData ? "Salvar alterações" : "Cadastrar Série"}
        </Button>
      </form>
    </Paper>
  );
}