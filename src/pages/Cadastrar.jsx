import { useState } from "react";
import { api } from "../services/api";

export default function Cadastrar() {
  const [formData, setFormData] = useState({
    titulo: "",
    temporadas: "",
    dataLancamento: "",
    diretor: "",
    produtora: "",
    categoria: "",
    dataAssistiu: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/series", formData);
      alert("Série cadastrada com sucesso!");

      setFormData({
        titulo: "",
        temporadas: "",
        dataLancamento: "",
        diretor: "",
        produtora: "",
        categoria: "",
        dataAssistiu: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar série:", error);
      alert("Erro ao cadastrar série. Verifique o console.");
    }
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Cadastrar Nova Série</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="temporadas"
          placeholder="Número de Temporadas"
          value={formData.temporadas}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="dataLancamento"
          value={formData.dataLancamento}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="diretor"
          placeholder="Diretor"
          value={formData.diretor}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="produtora"
          placeholder="Produtora"
          value={formData.produtora}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          value={formData.categoria}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="dataAssistiu"
          value={formData.dataAssistiu}
          onChange={handleChange}
          required
        />

        <button type="submit">Cadastrar Série</button>
      </form>
    </main>
  );
}
