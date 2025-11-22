import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar-toolbar">
        <div className="navbar-links">

          <Button className="nav-btn" component={Link} to="/">
            Home
          </Button>

          <Button className="nav-btn" component={Link} to="/sobre">
            Sobre
          </Button>

          <Button className="nav-btn" component={Link} to="/lista">
            Lista
          </Button>

          <Button className="nav-btn" component={Link} to="/cadastrar">
            Cadastrar
          </Button>

        </div>
      </Toolbar>
    </AppBar>
  );
}

