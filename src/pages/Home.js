import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Yasmim </h2>
        <div className="prompt">
          <p>Estudante de Sistemas para Internet</p>
        </div>
      </div>
      <div className="skills">
        <h1> Sobre </h1>
        <ol className="list">
          <li className="item">
            <span>
              Formada em Computação Gráfica e atualmente estudante de Sistemas para Internet.
            </span>
          </li>
          <li className="item">
            <h2>Interesses</h2>
            <span>
              Game Design,
              Programação aplicada à jogos,
              UX/UI Design, Web Design e Front-end.
            </span>
          </li>
          <li className="item">
            <h2></h2>
            <span> </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
