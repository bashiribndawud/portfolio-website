import React, { useState, useRef } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";

const Nav = () => {
  const [activeNow, setactiveNow] = useState("#");
  return (
    <nav>
      <a href="#home" onClick={() => setactiveNow("#")} className={activeNow === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNow("#about")}
        className={activeNow === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setactiveNow("#experience")}
        className={activeNow === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setactiveNow("#services")}
        className={activeNow === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setactiveNow("#contact")}
        className={activeNow === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Nav;
