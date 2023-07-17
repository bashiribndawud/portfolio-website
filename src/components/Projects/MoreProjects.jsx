import React from "react";
import "./moreproject.css";
import { Data } from "./Data";
const MoreProjects = ({ setShowProject }) => {
  return (
    <div className="moreproject__container container">
      <div className="moreproject__conatiner">
        <div className="header__conatiner">
          <h3 className="moreproduct__title">More Projects</h3>
          <i
            className="uil uil-times close"
            onClick={() => setShowProject(false)}
          ></i>
        </div>
        <div className="allproducts">
          {Data.slice(3).map(
            ({ description, title, coverUrl, demoLink, sourceLink }) => {
              return (
                <div key={sourceLink} className="product__item">
                  <img src={coverUrl} alt="" />
                  <div className="product__items__details">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="morep__links">
                      <a href={demoLink}>view</a>
                      <a href={sourceLink}>source code</a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
