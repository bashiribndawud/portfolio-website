import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="section services" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class="bx bx-code-alt services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i class="uil uil-arrow-right services_button_icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setToggleState(0)}
              ></i>

              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description">
                I am a backend developer with expertise in Node.js and MongoDB,
                specializing in building robust web applications. I design
                RESTful APIs, prioritize security, optimize database queries,
                and integrate third-party services. My portfolio showcases my
                skills in scalable architecture, clean code, and performance
                optimization. Let's create a powerful and efficient backend
                system for your application.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Write Server-Side Logic
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">API Development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Database Management</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Security Implementation
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Performance Optimization
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Integration of Third-Party Services
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Testing and Bug Fixing</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaboration with Front-End Developers
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View more
            <i class="uil uil-arrow-right services_button_icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>

              <h3 className="services__modal-title"> Visual Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati dicta sapiente aspernatur veritatis nobis minima
                optio? Reprehenderit saepe quae totam.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Page Developement</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company branch
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="services__content">
          <div>
            <i class="bx bx-code-alt services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View more
            <i class="uil uil-arrow-right services_button_icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setToggleState(0)}
              ></i>

              <h3 className="services__modal-title">Frontend Development</h3>
              <p className="services__modal-description">
                I am a frontend developer specializing in React, focused on
                building modern and interactive user interfaces. With expertise
                in state management, routing, and responsive design, I create
                visually stunning and seamless web applications. My portfolio
                showcases my ability to deliver engaging user experiences
                through smooth transitions and optimized performance. Let's
                collaborate to create exceptional frontend solutions using
                React.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User Interface Development
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Component Development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">State Management</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">API Integration</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive Design</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Testing</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaboration with Designers
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Code Maintenance and Refactoring
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
