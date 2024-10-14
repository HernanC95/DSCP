import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import style from "./app.module.css";
import pointer from "./assets/Left Icon 1.jpg";

const data = [
  {
    option: "Prenda 1",
    style: { backgroundColor: "blue", textColor: "white" },
  },
  {
    option: "Prenda 2",
    style: { backgroundColor: "white", textColor: "blue" },
  },
  {
    option: "Prenda 3",
    style: { backgroundColor: "blue", textColor: "white" },
  },
  {
    option: "Prenda 4",
    style: { backgroundColor: "white", textColor: "blue" },
  },
  {
    option: "Prenda 5",
    style: { backgroundColor: "blue", textColor: "white" },
  },
  {
    option: "Prenda 6",
    style: { backgroundColor: "white", textColor: "blue" },
  },
  {
    option: "Prenda 7",
    style: { backgroundColor: "blue", textColor: "white" },
  },
  {
    option: "Prenda 8",
    style: { backgroundColor: "white", textColor: "blue" },
  },
  {
    option: "Prenda 9",
    style: { backgroundColor: "blue", textColor: "white" },
  },
  {
    option: "Prenda 10",
    style: { backgroundColor: "white", textColor: "blue" },
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
    style: { width: "30px", height: "30px" },
  };

  return (
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
          innerBorderWidth={5}
          radiusLineWidth={0}
          pointerProps={pointerProps}
        />
      </button>
      {winningOption &&
        !mustSpin && ( // Muestra el texto solo si hay una opción ganadora
          <div className={style.winningText}>{winningOption}</div>
        )}
    </div>
  );
};

export default Roulette;
