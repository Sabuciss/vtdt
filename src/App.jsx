import { useState } from "react";
import photo from "./assets/IMG_6760.JPG";
import "./App.css";

export default function App() {
  const [spin, setSpin] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="img-center">
      <div className="img-wrap">
        <img
          src={photo}
          alt="Mana vieta VTDT"
          className={`photo ${spin ? "spin" : show ? "photo-effect" : ""}`}
          onAnimationEnd={() => {
            setSpin(false);
            setShow(true);
          }}
        />

        <button
          className="hotspot-btn"
          onClick={() => {
            setShow(false);
            setSpin(true);
          }}
        >
          Nospied mani
        </button>

        {show && (
          <div className="info">
            Šī ir man mīļākā vieta VTDT, jo te var vērot
            smukas mašīnas/močus, kas brauc garām! (aka soliņi)
          </div>
        )}
      </div>
    </div>
  );
}
