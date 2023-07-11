import React from "react";
import "./scrolltop.css";

const ScrollTop = () => {
  window.addEventListener("scroll", function () {
    const scrollTop = document.querySelector(".scrollTop");
    if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollTop">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollTop;
