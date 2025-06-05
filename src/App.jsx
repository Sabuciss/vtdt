import { useState } from "react";
import photo from "./assets/IMG_6760.JPG";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="img-center">
      <div className="img-wrap">
        <img src={photo} alt="Mana vieta VTDT" className="photo" />

        <button
          className="hotspot-btn"
          onClick={() => setShow(!show)}
        >
          Nospied mani
        </button>

        {show && (
          <div className="info">
            Šī ir man mīļākā vieta VTDT, kad ir labs laiks, jo te var vērot
            smukas mašīnas/močus, kas brauc garām!(aka soliņi)
          </div>
        )}
      </div>
    </div>
  );
}
