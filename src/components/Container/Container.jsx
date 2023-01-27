import React from "react";
import Foto from "../../iconos/Foto.JPG";
import Cover from "../Home/Home";
import gitHub from "../../iconos/github.png";
import linkedIn from "../../iconos/linkedIn.png";
import vimeo from "../../iconos/vimeo.png";
import "./Container.css";

export default function Container() {
  return (
    <div className="container">
      <div className="side-navbar">
        <img className="foto" src={Foto} />
        <a className="items" href="#home">
          Home
        </a>
        <a className="items" href="#about">
          About
        </a>
        <a className="items" href="#services">
          services
        </a>
        <a className="items" href="#portfolio">
          Portfolio
        </a>
        <a className="items" href="#contact">
          Contact
        </a>
        <div className="iconos">
          <a
            href="https://www.linkedin.com/in/andres-felipe-melo-ceron-34a47810a/"
            target="_blank"
          >
            <img className="icono" rel="stylesheet" src={linkedIn} />
          </a>
          <a href="https://github.com/anfemece123" target="_blank">
            <img className="icono" rel="stylesheet" src={gitHub} />
          </a>
          <a href="https://vimeo.com/790179119" target="_blank">
            <img className="icono" rel="stylesheet" src={vimeo} />
          </a>
        </div>
      </div>

      <div className="content-area">
        <div className="wrapper">
          <div className="banner" id="home">
            <div className="text-content">
              <Cover />
            </div>
          </div>
          <div id="about" className="about-area">
            <div className="text-content">
              <h2> About</h2>
            </div>
          </div>
          <div id="services" className="services-area">
            <div className="text-content">
              <h2> services</h2>
            </div>
          </div>
          <div id="portfolio" className="portfolio-area">
            <div className="text-content">
              <h2> Portfolio</h2>
            </div>
          </div>
          <div id="contact" className="contact-area">
            <div className="text-content">
              <h2> Contact</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
