import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Navbar estilizada com Material UI.
 * Links:
 * - Home
 * - Sobre
 * - Lista de Séries
 * - Cadastrar Série
 */
export default function NavBar() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar style={{ display: "flex", gap: 20 }}>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Série Journal
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/sobre">
          Sobre
        </Button>

        <Button color="inherit" component={Link} to="/lista">
          Lista
        </Button>

        <Button color="inherit" component={Link} to="/cadastrar">
          Cadastrar
        </Button>

      </Toolbar>
    </AppBar>
  );
}
