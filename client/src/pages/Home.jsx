import "../assets/styles/home.css";
import Back from "../assets/images/background.webp";

export default function Home() {
  return (
    <main>
      <div className="mainContainer">
        <img
          className="home-image"
          src={Back}
          alt="Ferme en bois au milieu de collines verdoyantes, avec des montagnes en arrière-plan sous un ciel bleu clair. Une petite ville ou un village est visible dans la vallée au loin."
        />
      </div>

      <h2 className="title-main-home">
        Bâtiments <br />
        agricoles de montagne
      </h2>
    </main>
  );
}
