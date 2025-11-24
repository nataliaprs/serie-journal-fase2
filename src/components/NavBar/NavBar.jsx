import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";

/**
 * NavBar - barra fixa superior.
 * - Usa botões MUI (component Link) para roteamento.
 * - Textos em Title Case conforme solicitado.
 */
export default function NavBar() {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar-toolbar" style={{ minHeight: "48px" }}>
        <div className="navbar-links" role="navigation" aria-label="Menu principal">
          <Button className="nav-btn" component={Link} to="/">
            Página Inicial
          </Button>

          <Button className="nav-btn" component={Link} to="/sobre">
            Sobre
          </Button>

          <Button className="nav-btn" component={Link} to="/cadastrar">
            Cadastrar Séries
          </Button>

          <Button className="nav-btn" component={Link} to="/lista">
            Lista de Séries
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}