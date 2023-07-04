import React from "react";
import CV from "../../assets/Bashir_Dauda.pdf";
import AboutImage from "../../assets/Bashir.JPG";
import Info from "./Info";
import "./about.css";
const About = () => {
  return (
    <section className="section about" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImage} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias
            pariatur ipsum, magni dicta nam architecto tempora voluptatum, vel
            ullam temporibus aliquid blanditiis consequatur voluptatem libero
            iure! Iste adipisci facilis in magni reprehenderit velit. Quaerat
            aut ea maiores corporis quidem.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV <i class="uil uil-file-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
