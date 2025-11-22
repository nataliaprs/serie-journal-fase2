import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function SerieForm({ editingSerie, setEditingSerie, series, setSeries }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    numTemporadas: "",
    dataLancamento: "",
    diretor: "",
    produtora: "",
    categoria: "",
    dataAssistiu: "",
  });

  useEffect(() => {
    if (editingSerie) {
      setFormData({
        title: editingSerie.title || "",
        numTemporadas: editingSerie.numTemporadas || "",
        dataLancamento: editingSerie.dataLancamento || "",
        diretor: editingSerie.diretor || "",
        produtora: editingSerie.produtora || "",
        categoria: editingSerie.categoria || "",
        dataAssistiu: editingSerie.dataAssistiu || "",
      });
    }
  }, [editingSerie]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const payload = { ...formData, numTemporadas: Number(formData.numTemporadas) };

      if (editingSerie) {
        const response = await api.put(`/series/${editingSerie.id}`, payload);
        setSeries(prev => prev.map(s => (s.id === editingSerie.id ? response.data : s)));
        alert("Série atualizada com sucesso!");
        setEditingSerie(null);
      } else {
        const response = await api.post("/series", payload);
        setSeries(prev => [...prev, response.data]);
        alert("Série cadastrada com sucesso!");
      }

      setFormData({
        title: "",
        numTemporadas: "",
        dataLancamento: "",
        diretor: "",
        produtora: "",
        categoria: "",
        dataAssistiu: "",
      });

      navigate("/lista");
    } catch (error) {
      console.error("Erro ao salvar série:", error);
      alert("Erro ao salvar série!");
    }
  }

  return (
    <main style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h1>{editingSerie ? "Editar Série" : "Cadastrar Nova Série"}</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título" value={formData.title} onChange={handleChange} required />
        <input type="number" name="numTemporadas" placeholder="Número de Temporadas" value={formData.numTemporadas} onChange={handleChange} required />
        <input type="date" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} required />
        <input type="text" name="diretor" placeholder="Diretor" value={formData.diretor} onChange={handleChange} required />
        <input type="text" name="produtora" placeholder="Produtora" value={formData.produtora} onChange={handleChange} required />
        <input type="text" name="categoria" placeholder="Categoria" value={formData.categoria} onChange={handleChange} required />
        <input type="date" name="dataAssistiu" value={formData.dataAssistiu} onChange={handleChange} required />
        <button type="submit">{editingSerie ? "Atualizar Série" : "Cadastrar Série"}</button>
      </form>
    </main>
  );
}