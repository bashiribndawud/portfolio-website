import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActivenav] = useState("#home")
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Bashir
        </a>

        <div className={`nav__menu ${showMenu ? "show__menu" : ""}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActivenav("#home")}
              >
                <i class="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActivenav("#about")}
              >
                <i class="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActivenav("#skills")}
              >
                <i class="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActivenav("#services")}
              >
                <i class="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#porfolio"
                className={
                  activeNav === "#porfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActivenav("#porfolio")}
              >
                <i class="uil uil-scenery nav__icon"></i> Porfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActivenav("#contact")}
              >
                <i class="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
