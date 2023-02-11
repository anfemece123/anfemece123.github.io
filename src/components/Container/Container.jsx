import React from "react";
import Foto from "../../iconos/Foto.JPG";
import Home from "../Home/Home";
import gitHub from "../../iconos/github.png";
import linkedIn from "../../iconos/linkedIn.png";
import vimeo from "../../iconos/vimeo.png";
import "./Container.css";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Proyects from "../Proyects/Proyects";
import { Contact } from "../Contact/Contact";

export default function Container() {
  return (
    <div className="container">
      <div className="side-navbar">
        <img className="foto" src={Foto} />
        <a className="items" href="#home">
          Home
        </a>
        <a className="items" href="#about">
          Sobre mi
        </a>
        <a className="items" href="#services">
          experiencia y educacion
        </a>
        <a className="items" href="#portfolio">
          Proyectos
        </a>
        <a className="items" href="#contact">
          Contacto
        </a>
        <div className="iconos">
          <a
            href="https://www.linkedin.com/in/andres-felipe-melo-ceron-34a47810a/"
            target="_blank"
          >
            <img
              className="icono"
              alt="Linkedin"
              rel="stylesheet"
              src={linkedIn}
            />
          </a>
          <a href="https://github.com/anfemece123" target="_blank">
            <img className="icono" rel="stylesheet" alt="github" src={gitHub} />
          </a>
          <a href="https://vimeo.com/790179119" target="_blank">
            <img className="icono" rel="stylesheet" alt="vimeo" src={vimeo} />
          </a>
        </div>
      </div>

      <div className="content-area">
        <div className="wrapper">
          <div className="banner" id="home">
            <div className="text-content">
              <Home />
            </div>
          </div>
          <div id="about" className="about-area">
            <div className="text-content">
              <About />
            </div>
          </div>
          <div id="services" className="services-area">
            <div className="text-content">
              <Experience />
            </div>
          </div>
          <div id="portfolio" className="portfolio-area">
            <div className="text-content">
              <Proyects />
            </div>
          </div>
          <div id="contact" className="contact-area">
            <div className="text-content">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
