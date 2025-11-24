import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Lista from "./pages/Lista";
import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";

// Hook global da API
import { useSeries } from "./hooks/useSeries";

function App() {
  const {
    series,
    addSerie,
    updateSerie,
    removeSerie,
    fetchSeries,
  } = useSeries();

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route
          path="/lista"
          element={<Lista series={series} removeSerie={removeSerie} />}
        />
        <Route
          path="/cadastrar"
          element={<Cadastrar addSerie={addSerie} fetchSeries={fetchSeries} />}
        />
        <Route
          path="/editar/:id"
          element={<Editar series={series} updateSerie={updateSerie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
