import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Lista from "./pages/Lista";
import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";

/**
 * Componente principal que define todas as rotas da aplicação.
 * A Navbar aparece em todas as páginas e o conteúdo muda conforme a rota.
 */
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />

        <Route path="/lista" element={<Lista />} />

        <Route path="/cadastrar" element={<Cadastrar />} />

        {/* Nova rota obrigatória da Fase 2 */}
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
