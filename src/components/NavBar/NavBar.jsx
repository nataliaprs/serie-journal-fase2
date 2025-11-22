import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <span className="nav-logo">Série Journal</span>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/sobre" className="nav-link">Sobre</Link>
        <Link to="/cadastrar" className="nav-link">Cadastrar</Link>
        <Link to="/lista" className="nav-link">Lista</Link>
      </div>
    </nav>
  );
}

