import React from "react";
import style from "./app.module.css";
import Roulette from "./Roulette";
import scrollDown from "./assets/scrollDown.png";

const App: React.FC = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.header}>
          {/* GIFs de fondo */}
          <div className={style.giphyBackground}>
            <iframe
              src="https://giphy.com/embed/S65JaHHLHKjjQZ7Ee7"
              frameBorder="0"
              title="Giphy 1"
            ></iframe>
            <iframe
              src="https://giphy.com/embed/c6Xp82Z3bDGER60Ask"
              frameBorder="0"
              title="Giphy 2"
            ></iframe>
            <iframe
              src="https://giphy.com/embed/VvBwJPhs2QEbQ0UiCj"
              frameBorder="0"
            ></iframe>
            <iframe
              src="https://giphy.com/embed/3o7btWxDlmXDVMdHLW"
              frameBorder="0"
            ></iframe>
          </div>
          {/* Texto superpuesto */}
          <div className={style.textHeader}>
            <h1 className={style.title}>Titulfdwo</h1>
            <p className={style.description}>Descripcion de alguna boludez</p>
          </div>

          {/* Scroll Down */}
          <img
            src={scrollDown}
            alt="Scroll down"
            className={style.scrollDown}
          />
        </div>
      </div>
      <Roulette />
    </>
  );
};

export default App;
