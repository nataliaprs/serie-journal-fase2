import { Link } from "react-router-dom";

export default function SerieList({ series, removeSerie }) {
  return (
    <div className="lista-container">
      {series.length === 0 ? (
        <p>Nenhuma série cadastrada ainda.</p>
      ) : (
        <ul className="lista-series">
          {series.map((serie) => (
            <li key={serie.id} className="item-serie">
              <span className="titulo">{serie.titulo}</span>
              <div className="acoes">
                <Link to={`/editar/${serie.id}`} className="btn-editar">
                  Editar
                </Link>
                <button
                  className="btn-excluir"
                  onClick={() => removeSerie(serie.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
