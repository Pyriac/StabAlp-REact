import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import "../assets/styles/navBar.css";

export default function NavBar() {
  const [menuState, setMenuState] = useState("menuNav");
  const handleMenuClick = () => {
    if (menuState === "menuNav") {
      setMenuState("menuNav-show");
    } else {
      setMenuState("menuNav");
    }
  };

  const handleLogoClick = () => {
    if (menuState === "menuNav-show") {
      setMenuState("menuNav");
    }
  };
  return (
    <header>
      {" "}
      <Link to={`/`}>
        <img
          className="logo"
          src={Logo}
          alt="Logo représentant deux toits de maisons stylisés en noir avec des fenêtres blanches, au-dessus d'une courbe bleue symbolisant une rivière"
        />
      </Link>
      <Link to={`/`}>
        <h1 onClick={handleLogoClick} className="Titre-Stab">
          Stab&apos; Alp
        </h1>
      </Link>
      <h3 className="Sous-titre-nav">
        Laurent Pineau - Conseiller bâtiment d&apos;élevage depuis 1996
      </h3>
      <nav>
        <a href="javascript:void(0)" onClick={handleMenuClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            className="list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </a>
        <div className={menuState}>
          <Link to={`/prestations`}>
            <a onClick={handleMenuClick}>Prestations</a>
          </Link>
          <Link to={`/innovations`}>
            <a onClick={handleMenuClick}>Innovations</a>
          </Link>
          <Link to={`/realisations`}>
            <a onClick={handleMenuClick}>Réalisation</a>
          </Link>
          <Link to={`/contact`}>
            <a onClick={handleMenuClick}>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
