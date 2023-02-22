import React from "react";
import "./About.css";
import video from "../../media/coverVideos.mp4";

export default function About() {
  return (
    <div className="containerAbout">
      <div className="textContent">
        <h2> SOBRE MI</h2>
        <p>
          ¡Hola a todos! Me presento, soy Andres Melo, un desarrollador de
          software full Stack . Estoy en búsqueda de mi primera oportunidad
          laboral para poder dedicarme al mundo de la tecnología que tanto me
          apasiona y así poder demostrar todo lo que puedo llegar a lograr con
          mucho esfuerzo y dedicación.{" "}
        </p>
        <br />

        <p>
          Soy profesional con experiencia en el área de la contabilidad en el
          área publica y llevando a cabo tareas de mucha responsabilidad.
          Siempre fui muy apasionado por el mundo de la tecnología, ahora estoy
          buscando un cambio profesional un año después de mucho estudio,
          trabajo y dedicación pero con la satisfacción de que estoy haciendo lo
          que en verdad me apasiona.
        </p>
        <p>
          Estoy buscando una empresa en la que pueda aprender y crecer, ya que
          no tengo miedo a enfrentarme a nuevos retos o aprender otros lenguajes
          de programación que me permitan seguir mejorando .
        </p>
      </div>
      <div className="videoContent">
        <video className="video2" src={video} autoPlay loop muted />
      </div>
    </div>
  );
}
