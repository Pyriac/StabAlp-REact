import { useState } from "react";

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
  return (
    <header>
      {" "}
      <img
        className="logo"
        src={Logo}
        alt="Logo représentant deux toits de maisons stylisés en noir avec des fenêtres blanches, au-dessus d'une courbe bleue symbolisant une rivière"
      />
      <h1 className="Titre-Stab">Stab&apos; Alp</h1>
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
          <a>Prestations</a>
          <a>Innovations</a>
          <a>Réalisation</a>
          <a>Contact</a>
        </div>
      </nav>
    </header>
  );
}
