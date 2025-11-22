import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, TextField, Button } from "@mui/material";
import api from "../services/api";

/**
 * Formulário de criação e edição de séries utilizando Material UI.
 *
 * Props:
 * - editId: ID da série para edição. Se não existir, cria nova.
 *
 * Funcionalidades:
 * ✔ Buscar série por ID (GET)
 * ✔ Cadastrar nova série (POST)
 * ✔ Atualizar série existente (PUT)
 * ✔ Feedback visual
 * ✔ Redirecionamento após salvar
 */
export default function SerieForm({ editId }) {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [temporadas, setTemporadas] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [diretor, setDiretor] = useState("");
  const [produtora, setProdutora] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataAssistiu, setDataAssistiu] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  // Carregar série ao editar
  useEffect(() => {
    if (!editId) return;

    async function carregar() {
      try {
        const response = await api.get(`/series/${editId}`);
        const serie = response.data;

        setTitulo(serie.titulo || "");
        setTemporadas(serie.temporadas || "");
        setDataLancamento(serie.dataLancamento || "");
        setDiretor(serie.diretor || "");
        setProdutora(serie.produtora || "");
        setCategoria(serie.categoria || "");
        setDataAssistiu(serie.dataAssistiu || "");
      } catch {
        setErro("Erro ao carregar dados para edição.");
      }
    }

    carregar();
  }, [editId]);

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      id: editId ? Number(editId) : undefined,
      titulo,
      temporadas,
      dataLancamento,
      diretor,
      produtora,
      categoria,
      dataAssistiu,
    };

    try {
      if (editId) {
        await api.put("/series", payload);
        setMensagem("✨ Série atualizada com sucesso!");
      } else {
        await api.post("/series", payload);
        setMensagem("✨ Série cadastrada com sucesso!");
      }

      setTimeout(() => navigate("/lista"), 1500);

    } catch {
      setErro("Erro ao salvar a série.");
    }
  }

  return (
    <Paper elevation={4} sx={{ padding: 4, maxWidth: 600, margin: "20px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        {editId ? "Editar Série" : "Cadastrar Série"}
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
          label="Título"
          required
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <TextField
          label="Número de Temporadas"
          type="number"
          required
          value={temporadas}
          onChange={(e) => setTemporadas(e.target.value)}
        />

        <TextField
          label="Data de Lançamento"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={dataLancamento}
          onChange={(e) => setDataLancamento(e.target.value)}
        />

        <TextField
          label="Diretor"
          required
          value={diretor}
          onChange={(e) => setDiretor(e.target.value)}
        />

        <TextField
          label="Produtora"
          value={produtora}
          onChange={(e) => setProdutora(e.target.value)}
        />

        <TextField
          label="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <TextField
          label="Data assistida"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={dataAssistiu}
          onChange={(e) => setDataAssistiu(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ padding: 1.5 }}
        >
          {editId ? "Salvar alterações" : "Cadastrar Série"}
        </Button>
      </form>
    </Paper>
  );
}
