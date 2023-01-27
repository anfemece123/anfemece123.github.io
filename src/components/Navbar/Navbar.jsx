import React from "react";
import "./Navbar.css";
// import node from "../../iconos/node.ico"
// import javascript from "../../iconos/javascript.ico"
// import react from "../../iconos/react.ico"
// import postgresql from "../../iconos/postgresql.ico"
import gitHub from "../../iconos/github.png";
import linkedIn from "../../iconos/linkedIn.png";
import vimeo from "../../iconos/vimeo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar;
