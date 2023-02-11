import React from "react";
import "./contact.css";
import CV from "../../media/CV.pdf";

export const Contact = () => {
  return (
    <div class="content">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
      <h3 className="logo">Contacto</h3>
      <div class="contact-wrapper animated bounceInUp">
        <div class="contact-form">
          <h3>Escribeme</h3>
          <form
            action="https://formsubmit.co/andresfelipemelo18@gmail.com"
            method="POST"
          >
            <p>
              <label>Nombre</label>
              <input type="text" name="fullname" />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Numero de telefono</label>
              <input type="tel" name="phone" />
            </p>
            {/* <p>
              <label>Affair</label>
              <input type="text" name="affair" />
            </p> */}
            <p class="block">
              <label>Mensaje</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p class="block">
              <button>Enviar</button>
            </p>
          </form>
        </div>
        <div class="contact-info">
          <h4>Mas informacion: </h4>
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i> Bogota, Colombia
            </li>
            <br />
            <li>
              <i class="fas fa-phone"></i> (+57) 3185839777
            </li>
            <br />
            <li>
              <i class="fas fa-envelope-open-text"></i>{" "}
              andresfelipemelo18@gmail.com
            </li>
          </ul>
          <a href={CV} download="CV Andres Felipe Melo">
            <button className="cv-button"> Descargar cv</button>
          </a>
          <div className="list-icons">
            <ul>
              <a
                href="https://www.linkedin.com/in/andres-felipe-melo-ceron-34a47810a/"
                target="_blank"
              >
                <li>
                  <i class="fab fa-linkedin"></i>
                </li>
              </a>
              <a href="https://github.com/anfemece123" target="_blank">
                <li>
                  <i class="fab fa-github"></i>
                </li>
              </a>
              <a href="https://vimeo.com/790179119" target="_blank">
                <li>
                  <i class="fab fa-vimeo"></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
