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
    <main
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "35px",
          borderRadius: "12px",
          backdropFilter: "blur(4px)",
          width: "380px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Cadastrar Série</h2>

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
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          value={formData.categoria}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dataAssistiu"
          value={formData.dataAssistiu}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "8px",
            background: "#444",
            color: "white",
            cursor: "pointer",
            border: "none",
            fontSize: "1rem",
          }}
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}
