import React from "react";
import { useState } from "react";

export default function Cadastrar({ addSerie }) {
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
    await addSerie(formData);
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
  }

  return (
    <main>
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "400px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "20px",
          }}
        >
          Cadastrar Nova Série
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
          }}
        >
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={formData.titulo}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <input
            type="number"
            name="temporadas"
            placeholder="Número de Temporadas"
            value={formData.temporadas}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <input
            type="date"
            name="dataLancamento"
            value={formData.dataLancamento}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <input
            type="text"
            name="diretor"
            placeholder="Diretor"
            value={formData.diretor}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <input
            type="text"
            name="produtora"
            placeholder="Produtora"
            value={formData.produtora}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <input
            type="text"
            name="categoria"
            placeholder="Categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <input
            type="date"
            name="dataAssistiu"
            value={formData.dataAssistiu}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "6px" }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              fontSize: "1rem",
              background: "#c62828",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Cadastrar Série
          </button>
        </form>
      </div>
    </main>
  );
}