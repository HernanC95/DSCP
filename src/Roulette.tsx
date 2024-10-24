import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import style from "./app.module.css";
import pointer from "./assets/pointer.png";

const data = [
  {
    option: "1",
    style: { backgroundColor: "#597d71", textColor: "#2C3E50" },
    description: "Hacer fondo blanco con…",
  },
  {
    option: "2",
    style: { backgroundColor: "#feb897", textColor: "#2C3E50" },
    description: "Toma el que gira la ruleta",
  },
  {
    option: "3",
    style: { backgroundColor: "#acaf9c", textColor: "#2C3E50" },
    description:
      "Llamar a Abri y decirle cuantos vasos vas tomando, después tomar",
  },
  {
    option: "4",
    style: { backgroundColor: "#d2caaf", textColor: "#2C3E50" },
    description: "3 burpees",
  },
  {
    option: "5",
    style: { backgroundColor: "#597d71", textColor: "#2C3E50" },
    description: "Tequilazo (o similar)",
  },
  {
    option: "6",
    style: { backgroundColor: "#feb897", textColor: "#2C3E50" },
    description:
      "Contar un secreto picante en un minuto. Sino contesta soplamoco",
  },
  {
    option: "7",
    style: { backgroundColor: "#d2caaf", textColor: "#2C3E50" },
    description: "Comodín",
  },
  {
    option: "8",
    style: { backgroundColor: "#E6D9CC", textColor: "#2C3E50" },
    description: "Simula sexo oral con tu dedo.",
  },
  {
    option: "9",
    style: { backgroundColor: "#99b6a2", textColor: "#2C3E50" },
    description: "Graba un gemido y mándalo como mensaje de voz",
  },
  {
    option: "10",
    style: { backgroundColor: "#fbefdd", textColor: "#2C3E50" },
    description: "Alguien del grupo tiene que darte una nalgada",
  },
  {
    option: "11",
    style: { backgroundColor: "#597d71", textColor: "#2C3E50" },
    description: "Cuenta una anecdota sexual",
  },
  {
    option: "12",
    style: { backgroundColor: "#feb897", textColor: "#2C3E50" },
    description: "Deja que el grupo decida un desafio",
  },
  {
    option: "13",
    style: { backgroundColor: "#acaf9c", textColor: "#2C3E50" },
    description: "Cuenta al grupo el lugar mas raro donde has tenido sexo",
  },
  {
    option: "14",
    style: { backgroundColor: "#d2caaf", textColor: "#2C3E50" },
    description:
      "Deja que otro jugador te tatue lo que quiera con un boligrafo",
  },
  {
    option: "15",
    style: { backgroundColor: "#597d71", textColor: "#2C3E50" },
    description: "Juega a piedra papel o tijera con alguien. El perdedor toma.",
  },
  {
    option: "16",
    style: { backgroundColor: "#feb897", textColor: "#2C3E50" },
    description: "Contar un chiste, de lo contrario fondo blanco",
  },
  {
    option: "17",
    style: { backgroundColor: "#d2caaf", textColor: "#2C3E50" },
    description: "Entrar a comprar vestido de mujer",
  },
  {
    option: "18",
    style: { backgroundColor: "#E6D9CC", textColor: "#2C3E50" },
    description: "Hacerse pasar por gay",
  },
  {
    option: "19",
    style: { backgroundColor: "#99b6a2", textColor: "#2C3E50" },
    description: "Todos fondo blanco",
  },
  {
    option: "20",
    style: { backgroundColor: "#fbefdd", textColor: "#2C3E50" },
    description: "Fondo blanco y volver a girar",
  },
  {
    option: "21",
    style: { backgroundColor: "#597d71", textColor: "#2C3E50" },
    description: "Turno libre",
  },
  {
    option: "22",
    style: { backgroundColor: "#feb897", textColor: "#2C3E50" },
    description: "Tener que hacer un baile",
  },
  {
    option: "23",
    style: { backgroundColor: "#acaf9c", textColor: "#2C3E50" },
    description: "Que diga un trabalenguas de lo contrario fondo blanco",
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
    style: {
      width: "40px",
      height: "40px",
      marginTop: "10px",
      marginRight: "20px",
    },
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
              setWinningOption(data[prizeNumber].option);
            }}
            outerBorderWidth={2}
            radiusLineWidth={2}
            pointerProps={pointerProps}
          />
        </button>
        {winningOption && !mustSpin && (
          <>
            <div className={style.winningText}>{winningOption}</div>
            <div className={style.containerText}>
              <p className={style.textRoulette}>
                {data[prizeNumber].description}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Roulette;
