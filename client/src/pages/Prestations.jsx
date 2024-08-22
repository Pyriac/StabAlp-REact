import Back from "../assets/images/back_prestation.jpg";

import prestations from "../assets/data/prestations";

import "../assets/styles/prestations.css";

export default function Prestations() {
  return (
    <main className="main-prestations">
      <div className="presta-header">
        <h2 className="presta-header-title">Stab&apos; Alp vous accompagne</h2>
        <img src={Back} alt="" className="presta-header-back" />
      </div>
      <section className="presta-section">
        {prestations.map((prestation) => (
          <article key={prestation.name} className="presta-article-carte">
            <img
              src={prestation.image}
              alt={prestation.alt}
              className="presta-image"
            />
            <h2 className="presta-titre">{prestation.name}</h2>
            <p className="presta-desc">{prestation.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
