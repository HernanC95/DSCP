import React from "react";
import style from "./app.module.css";
import Roulette from "./Roulette";

const App: React.FC = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.header}>
          <h1 className={style.title}>Ruleta</h1>
          <p className={style.description}>
            Gira la ruleta y selecciona una opción al azar.
          </p>
        </div>
      </div>
      <Roulette />
    </>
  );
};

export default App;
