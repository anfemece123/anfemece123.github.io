import React from "react";
import "./Proyects.css";
import ecommerce from "../../media/e-commerce.gif";
import pokemon from "../../media/pokemon.gif";

const Proyects = () => {
  return (
    <div className="proyects-container">
      <h2> Proyectos</h2>
      <div class="contenedor-img ejemplo-1">
        <img src={ecommerce} />
        <div class="mascara">
          <h2>E-COMMERCE TIENDA NUESTRA</h2>
          <p>
            Diseñé y programé un E-commerce de vestimenta que incluía: métodos
            de autenticación y registro de nuevos usuarios, búsquedas,
            filtrados, gestion de información personal y de los productos, panel
            admin, compra de prendas, actualización de stock, e historial de
            compras.
          </p>
          <p>
            Tecnologías utilizadas: HTML, Bootstrap, JavaScript, React,
            MaterialUI, Redux, Node, Express, Sequelize PostgreSQL.
          </p>

          <a href="http://159.223.195.60:3000/" target="_blank" class="link">
            Link del proyecto
          </a>
        </div>
      </div>
      <div class="contenedor-img ejemplo-1">
        <img src={pokemon} />
        <div class="mascara">
          <h2>App Pokemon</h2>
          <p>
            Desarrollé una App de pokemon que incluía: Búsquedas, filtrados,
            ordenamientos, y creación.
          </p>
          <p>
            Tecnologías utilizadas: HTML, CSS Puro, JavaScript, React, Redux,
            Node, Express, Sequelize y PostgreSQL.
          </p>
          <a
            href="https://github.com/anfemece123/PI-POKEMON"
            target="_blank"
            class="link"
          >
            Link del proyecto
          </a>
        </div>
      </div>
    </div>
  );
};
export default Proyects;
