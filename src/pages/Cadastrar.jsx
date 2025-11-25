import React from "react";
import { useNavigate } from "react-router-dom";
import SerieForm from "./SerieForm";

export default function Cadastrar({ addSerie }) {
  const navigate = useNavigate();
  return <SerieForm onSave={addSerie} navigateFn={navigate} />;
}