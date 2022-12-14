/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Headersocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/bashir-dauda-software-developer-6915541a7/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/bashiribndawud/" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default Headersocial;
