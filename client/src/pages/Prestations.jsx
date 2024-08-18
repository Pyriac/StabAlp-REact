import Back from "../assets/images/back_prestation.jpg";

import "../assets/styles/prestations.css";

export default function Prestations() {
  return (
    <main className="main-prestations">
      <div className="presta-header">
        <h2 className="presta-header-title">Stab&apos; Alp vous accompagne</h2>
        <img src={Back} alt="" className="presta-header-back" />
      </div>
      <article></article>
    </main>
  );
}
