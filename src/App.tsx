import React from "react";
import style from "./app.module.css";
import Roulette from "./Roulette";
import scrollDown from "./assets/scrollDown.png";
import tulio from "./assets/tulio.jpg";

const App: React.FC = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.header}>
          {/* GIFs de fondo */}
          <div className={style.giphyBackground}>
            <iframe
              src="https://giphy.com/embed/S65JaHHLHKjjQZ7Ee7"
              className={style.iframe1}
            ></iframe>
            <iframe
              src="https://giphy.com/embed/c6Xp82Z3bDGER60Ask"
              className={style.iframe2}
            ></iframe>
            <iframe
              src="https://giphy.com/embed/3o7btWxDlmXDVMdHLW"
              className={style.iframe3}
            ></iframe>
          </div>
          {/* Texto superpuesto */}
          <div className={style.textHeader}>
            <h1 className={style.title}>LIBERTAD EN PELIGRO</h1>
            <img src={tulio} alt="imgTulio" className={style.imgTulio} />
            <p className={style.description}>
              Nuestro amigo perdió la cabeza, ahora se quiere casar
            </p>
            <img
              src={scrollDown}
              alt="Scroll down"
              className={style.scrollDown}
            />
          </div>
        </div>
      </div>
      <Roulette />
    </>
  );
};

export default App;
