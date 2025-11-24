import React from "react";
import { useParams } from "react-router-dom";
import SerieForm from "../pages/SerieForm";

/**
 * Página Editar
 * Localiza a série pelo ID nas props recebidas do App.jsx.
 * Entrega os dados para o SerieForm.jsx preencher automaticamente.
 */
export default function Editar({ series, updateSerie }) {
  const { id } = useParams();

  // Encontra a série da lista atual
  const serie = series.find((s) => s.id === Number(id));

  if (!serie) return <p>Carregando dados...</p>;

  return (
    <SerieForm
      editData={serie}
      onSave={(data) =>
        updateSerie({ ...data, id: Number(id) })
      }
    />
  );
}