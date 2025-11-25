import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SerieForm from "../pages/SerieForm";

/**
 * Página Editar
 * Localiza a série pelo ID e injeta no formulário.
 */
export default function Editar({ series, updateSerie }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const serie = series.find((s) => s.id === Number(id));
  if (!serie) return <p>Carregando dados...</p>;

  return (
    <SerieForm
      editData={serie}
      onSave={(data) => updateSerie({ ...data, id: Number(id) })}
      navigateFn={navigate}
    />
  );
}