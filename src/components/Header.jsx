import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.png';
import logo from '../images/logoGrande.png';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo"></img>
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/talentos">Talentos</Link></li>
          <li><Link to="/pymes">Pymes</Link></li>
          <li><Link to="/foros">Foros</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/ingresar">Ingresar</Link></li>
        </ul>
      </div>
      <div>
        <Link to="/ingresar">
          <img src={user} className="login"></img>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
