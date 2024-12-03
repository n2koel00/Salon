import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../components/images/FooniLogo.jpg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>

      <nav className={isMenuOpen ? "nav open" : "nav"}>
        <Link to="/page1">Ajankohtaista</Link>
        <Link to="/page2">Hinnasto</Link>
        <Link to="/page3">Ajanvaraus</Link>
        <Link to="/page4">Henkilökunta</Link>
        <Link to="/page5">Yhteystiedot</Link>
        <Link to="/page6">Tilat</Link>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  );
}

export default Header;
