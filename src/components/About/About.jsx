import React from "react";
import "./About.css";
import video from "../../media/coverVideos.mp4";

export default function About() {
  return (
    <div className="containerAbout">
      <div className="textContent">
        <h2> About me</h2>
        <p>I'm Andres, a development sofware full stack.</p>
        <p>I want find my first oportunity laboral in progration</p>
        <p>I am a person very dedication, responsable </p>
        <p>and passionate for the tecnology .</p>
        <p>Always have </p>
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
      <div className="videoContent">
        <video className="video2" src={video} autoPlay loop muted />
      </div>
    </div>
  );
}
