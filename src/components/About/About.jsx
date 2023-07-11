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
            I am a dedicated MERN stack developer with a strong background in
            JavaScript and expertise in MongoDB, Express.js, React.js, and
            Node.js. I have experience working on diverse projects and enjoy
            collaborating in dynamic teams. My portfolio showcases my skills in
            designing intuitive user interfaces, developing efficient back-end
            systems, and integrating APIs for seamless functionality. Let's
            build something amazing together!
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
