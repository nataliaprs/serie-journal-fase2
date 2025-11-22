import { useParams } from "react-router-dom";
import SerieForm from "./SerieForm";

/**
 * Página específica para edição de uma série.
 * O objetivo desta página é:
 * - Ler o ID da URL
 * - Passar esse ID para o formulário
 * - Permitir que o formulário recupere e edite a série
 */
export default function Editar() {
  const { id } = useParams();

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Editar Série</h1>
      <SerieForm editId={id} />
    </div>
  );
}