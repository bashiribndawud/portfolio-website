import React from "react";
import Typewriter from "./Typewriter";

const Data = () => {
 
  return (
    <div className="home__data">
      <Typewriter className="home__title" text="Bashir Dauda" delay={100} />

      <h3 className="home__subtitle">Fullstack Developer</h3>
      <p className="home__description">
        I am a dedicated MERN stack developer with a strong background in
        JavaScript and expertise in MongoDB, Express.js, React.js, and Node.js.
        I have experience working on diverse projects and enjoy collaborating in
        dynamic teams. My portfolio showcases my skills in designing intuitive
        user interfaces, developing efficient back-end systems, and integrating
        APIs for seamless functionality. Let's build something amazing together!
      </p>
      <a href="#contact" className="button button__flex">
        Say Hello
        <i class="uil uil-message"></i>
      </a>
    </div>
  );
};

export default Data;
