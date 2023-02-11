import React from "react";
import "./Experience.css";
import javaScriptIco from "../../iconos/javascript.ico";
import nodeIco from "../../iconos/node.png";
import postgresqlIco from "../../iconos/postgresql.ico";
import reactIco from "../../iconos/react.ico";
import boostrap from "../../iconos/bootstrap.ico";
import css from "../../iconos/css.png";
import html from "../../iconos/html.ico";
import postman from "../../iconos/postman.ico";
import redux from "../../iconos/redux.ico";
import git from "../../iconos/git.ico";
import visual from "../../iconos/visual.ico";
import tailwind from "../../iconos/tailwind.png";

export default function Experience() {
  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
      <div className="logos">
        <img src={javaScriptIco} alt="javascriptico" />
        <img src={nodeIco} alt="nodeIco" />
        <img src={postgresqlIco} alt="postgresqlIco" />
        <img src={reactIco} alt="reactIco" />
        <img src={boostrap} alt="boostrap" />
        <img src={css} alt="css" />
        <img src={html} alt="html" />
        <img src={postman} alt="postman" />
        <img src={redux} alt="redux" />
        <img src={git} alt="git" />
        <img src={visual} alt="visual" />
        <img src={tailwind} alt="tailwind" />
      </div>

      <div className="containerExperience">
        <h2>Experiencia</h2>
        <h3>INDOMET ingenieria y seguridad (2 años)</h3>
        <h3>CARGO: AUXILIAR CONTABLE</h3>
        <h3>Funciones:</h3>
        <p>🔸Actividades relacionadas al aspecto contable</p>
        <p>🔸Conciliaciones bancarias</p>
        <p>🔸Manejo de caja menor</p>
        <p>🔸Pago de Nomina</p>
        <br />
        <h3>CORPORACION AUTONOMA DE NARIÑO (1 año)</h3>
        <h3>CARGO: AUXILIAR CONTABLE</h3>
        <h3>Funciones:</h3>
        <p>
          Prestación de servicios de apoyo a la gestión como tecnólogo en el
          área de economía, administración, contaduría y afines para brindar
          apoyo de las funciones desarrolladas en la subdirección administrativa
          y financieras.
        </p>
      </div>
      <div className="containerEducation">
        <h2>Educacion</h2>
        <h3>INSTITUTO HENRY</h3>
        <h3>FULL-STACK WEB DEVELOP</h3>
        <p>
          Realice mis estudios de desarrollador full stack Lenguajes de
          programación como: <br />
          🔹 HTML, CSS, Tailwind css, Bootstrap .<br />
          🔹JavaScript. <br />
          🔹 React, React Native, Redux Toolkid. <br />
          🔹 NodeJS con Express . <br />
          🔹 Sequelize PostgreSQL. <br />
          Uso de metodologías agiles como : <br />
          🔸 SCRUM <br />
          🔸 Trello <br />
          Además de herramientas como: <br />
          🔹 Git | Github. <br />
          🔹 Android Studio <br />
          🔹 Postman.
        </p>
        <br />
        <h3>UNIVERSIDAD CESMAG</h3>
        <p>Contador publico</p>
      </div>
    </div>
  );
}
