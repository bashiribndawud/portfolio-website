import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* First qualification content */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Data 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bsc Computer Science</h3>
                <span className="qualification__subtitle">
                  Bayero University Kano, Nigeria
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Data 2 */}
            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div> */}

            {/* Data 3 */}
            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">DB Admin</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            {/* Data 4 */}
            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI/UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div> */}
          </div>

          {/* Second qualification content */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Data 1 */}
            <div className="qualification__data ">
              <div>
                <h3 className="qualification__title">
                  Software Developer (Intern)
                </h3>
                <span className="qualification__subtitle">HIIT PLC</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>May 2021 - Dec 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Data 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Scholapay, Lagos
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Feb 2021 - Dec 2021
                </div>
              </div>
            </div>

            {/* Data 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Center for disease control
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>March 2022 - Aug 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
