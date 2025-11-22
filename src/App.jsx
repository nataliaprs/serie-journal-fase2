import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Lista from "./pages/Lista";
import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";

// Importa o hook responsável por integrar com a API via Axios
import { useSeries } from "./hooks/useSeries";

/**
 * Componente principal que define todas as rotas da aplicação.
 * Aqui chamamos o hook useSeries, que controla TODO o CRUD (GET, POST, PUT, DELETE).
 * O estado e as funções são repassados para as páginas via props.
 */
function App() {
  const {
    series,
    loading,
    erro,
    addSerie,
    updateSerie,
    removeSerie,
    fetchSeries
  } = useSeries();

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />

        {/* Lista recebe as séries e funções da API */}
        <Route
          path="/lista"
          element={
            <Lista
              series={series}
              loading={loading}
              erro={erro}
              removeSerie={removeSerie}
            />
          }
        />

        {/* Cadastrar recebe addSerie */}
        <Route
          path="/cadastrar"
          element={
            <Cadastrar
              addSerie={addSerie}
            />
          }
        />

        {/* Editar recebe updateSerie + fetchSeries para carregar o item */}
        <Route
          path="/editar/:id"
          element={
            <Editar
              series={series}
              updateSerie={updateSerie}
              fetchSeries={fetchSeries}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

