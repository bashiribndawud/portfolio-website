import React from 'react'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <span className="home__scroll-button button--flex">
        <i class="uil uil-ellipsis-v scroll"></i>
      </span>
      <a href="">
        <span className="home__scroll-name">Scroll Down</span>
        <i class="uil uil-arrow-down home-scroll-down"></i>
      </a>
    </div>
  );
}

export default ScrollDown