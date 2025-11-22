import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, TextField, Button } from "@mui/material";
import api from "../services/api";

/**
 * Formulário de criação e edição de séries utilizando Material UI.
 *
 * Props:
 * - editData: objeto da série que será editada (vem da página Editar)
 * - onSave: função para criar ou atualizar (addSerie ou updateSerie)
 *
 * O formulário NÃO chama mais a API diretamente.
 * Ele chama APENAS a função enviada pelo App.jsx (via props).
 * Assim fica limpo, modular e 100% padrão Fase 2.
 */
export default function SerieForm({ editData, onSave }) {
  const navigate = useNavigate();

  // Estado interno do formulário
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

  // Preenche automaticamente ao editar
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

    try {
      await onSave(form);
      setMensagem(editData ? "✨ Série atualizada com sucesso!" : "✨ Série cadastrada!");

      setTimeout(() => navigate("/lista"), 1200);
    } catch (err) {
      console.error(err);
      setErro("Erro ao salvar série.");
    }
  }

  return (
    <Paper elevation={4} sx={{ padding: 4, maxWidth: 600, margin: "20px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        {editData ? "Editar Série" : "Cadastrar Série"}
      </h2>

      {mensagem && (
        <div
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
          label="Data de Lançamento"
          type="date"
          InputLabelProps={{ shrink: true }}
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
          label="Data assistida"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={form.dataAssistiu}
          onChange={handleChange}
        />

      <Button
        variant="contained"
        type="submit"
        sx={{
        padding: 1.5,
        backgroundColor: "#222","&:hover": { backgroundColor: "#ff4d4d" },
  }}
>
  {editData ? "Salvar alterações" : "Cadastrar Série"}
</Button>

      </form>
    </Paper>
  );
}