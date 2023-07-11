import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Bashir</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolioo" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#testimonial" className="footer__link">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.instagram.com/bassharibn/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://twitter.com/BashirD18182352"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-twitter"></i>
          </a>

          <a
            href="https://web.facebook.com/bassharibn.dawud.9"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-facebook-f"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; IbnDawud. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
