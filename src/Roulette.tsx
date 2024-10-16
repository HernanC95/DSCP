import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import style from "./app.module.css";
import pointer from "./assets/pointer.png";

const data = [
  {
    option: "Prenda 1",
    style: { backgroundColor: "blue", textColor: "white" },
    description:
      "Descripción de la prenda 1: Camiseta de algodón cómoda y ligera.",
  },
  {
    option: "Prenda 2",
    style: { backgroundColor: "white", textColor: "blue" },
    description:
      "Descripción de la prenda 2: Sudadera con capucha ideal para el invierno.",
  },
  {
    option: "Prenda 3",
    style: { backgroundColor: "blue", textColor: "white" },
    description:
      "Descripción de la prenda 3: Pantalones vaqueros de corte ajustado.",
  },
  {
    option: "Prenda 4",
    style: { backgroundColor: "white", textColor: "blue" },
    description:
      "Descripción de la prenda 4: Chaqueta impermeable para días lluviosos.",
  },
  {
    option: "Prenda 5",
    style: { backgroundColor: "blue", textColor: "white" },
    description:
      "Descripción de la prenda 5: Camisa de vestir con diseño clásico.",
  },
  {
    option: "Prenda 6",
    style: { backgroundColor: "white", textColor: "blue" },
    description:
      "Descripción de la prenda 6: Pantalones cortos cómodos para el verano.",
  },
  {
    option: "Prenda 7",
    style: { backgroundColor: "blue", textColor: "white" },
    description:
      "Descripción de la prenda 7: Bufanda de lana para mantener el calor.",
  },
  {
    option: "Prenda 8",
    style: { backgroundColor: "white", textColor: "blue" },
    description:
      "Descripción de la prenda 8: Gorro de invierno hecho de tejido suave.",
  },
  {
    option: "Prenda 9",
    style: { backgroundColor: "blue", textColor: "white" },
    description:
      "Descripción de la prenda 9: Vestido de verano ligero y colorido.",
  },
  {
    option: "Prenda 10",
    style: { backgroundColor: "white", textColor: "blue" },
    description:
      "Descripción de la prenda 10: Zapatillas deportivas con amortiguación extra.",
  },
];

const Roulette: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winningOption, setWinningOption] = useState("");

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const pointerProps = {
    src: pointer,
    style: { width: "40px", height: "40px" },
  };

  return (
    <div className={style.containerRoulette}>
      <h1 className={style.titleRoulette}>TOQUE PARA GIRAR</h1>
      <div className={style.roulette}>
        <button onClick={handleSpinClick} className={style.buttonSpin}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
              setWinningOption(data[prizeNumber].option); // Actualiza la opción ganadora
            }}
            outerBorderWidth={2}
            radiusLineWidth={0}
            pointerProps={pointerProps}
          />
        </button>
        {winningOption && !mustSpin && (
          <>
            <div className={style.winningText}>{winningOption}</div>
            <h2 className={style.subtitleRoulette}>Descripción:</h2>
            <div className={style.containerText}>
              <p className={style.textRoulette}>
                {winningOption && !mustSpin && data[prizeNumber].description}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Roulette;
