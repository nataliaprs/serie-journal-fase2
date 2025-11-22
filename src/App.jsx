import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import SerieForm from "./pages/SerieForm";
import Lista from "./pages/Lista";

export default function App() {
  const [editingSerie, setEditingSerie] = useState(null);
  const [series, setSeries] = useState([]);

  return (
    <BrowserRouter>
      <NavBar />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/cadastrar"
            element={
              <SerieForm
                editingSerie={editingSerie}
                setEditingSerie={setEditingSerie}
                series={series}
                setSeries={setSeries}
              />
            }
          />
          <Route
            path="/lista"
            element={
              <Lista
                series={series}
                setSeries={setSeries}
                setEditingSerie={setEditingSerie}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
