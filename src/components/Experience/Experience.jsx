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
import CV from "../../media/CV.pdf";

export default function Experience() {
  return (
    <div className="container">
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
        <h2>Experience</h2>
        <p>I'm Lokkee, a passionate freelancer bringing you programming and</p>
        <p>
          design from the future. I am experienced in developing web and desktop
        </p>
        <p>applications including full front end design. This includes brand</p>
        <p>identity, graphics and illustrations.</p>
        <p>I'm Lokkee, a passionate freelancer bringing you programming and</p>
        <p>
          design from the future. I am experienced in developing web and desktop
        </p>
        <p>applications including full front end design. This includes brand</p>
        <p>identity, graphics and illustrations.</p>
        <p>I'm Lokkee, a passionate freelancer bringing you programming and</p>
        <p>
          design from the future. I am experienced in developing web and desktop
        </p>
        <p>applications including full front end design. This includes brand</p>
        <p>identity, graphics and illustrations.</p>
      </div>
      <div className="containerEducation">
        <h2>Education</h2>
        <p>I'm Lokkee, a passionate freelancer bringing you programming and</p>
        <p>
          design from the future. I am experienced in developing web and desktop
        </p>
        <p>applications including full front end design. This includes brand</p>
        <p>identity, graphics and illustrations.</p>
        <p>I'm Lokkee, a passionate freelancer bringing you programming and</p>
        <p>
          design from the future. I am experienced in developing web and desktop
        </p>
        <p>applications including full front end design. This includes brand</p>
        <p>identity, graphics and illustrations.</p>
        <p>I'm Lokkee, a passionate freelancer bringing you programming and</p>
        <p>
          design from the future. I am experienced in developing web and desktop
        </p>
        <p>applications including full front end design. This includes brand</p>
        <p>identity, graphics and illustrations.</p>
        <a href={CV} download="CV Andres Felipe Melo">
          <p> descarga mi CV</p>
        </a>
      </div>
    </div>
  );
}
