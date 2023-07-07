import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d9jpc5n', 'template_puco04j', form.current, 'F5iEj7qKYEDxzC8IK')
      .then((result) => {
          alert('Message sent');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section className="section contact" id="contact">
      <h2 className="section__title"> Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="h3 contact__title">Talk to me</div>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>

              <span className="contact__card-data">
                bashir4windowslive@gmail.com
              </span>
              <br />
              <a
                href="mailto:bashir4windowslive@gmail.com"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatapp</h3>

              <span className="contact__card-data">+2348145644352</span>
              <br />
              <a
                href="https://api.whatsapp.com/send?phone=+2348145644352&text=Hello, more information"
                className="contact__button"
                target="_blank"
                rel="noreferrer
                "
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <div className="h3 contact__title">Write me your project</div>

          <form
            action=""
            className="contact__form "
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div contact__info">
              <label htmlFor="email" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="contact__form-input"
                placeholder="Insert your mail"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="project" className="contact__form-tag">
                Project
              </label>
              <textarea
                name="project"
                id="project"
                cols="30"
                rows="5"
                placeholder="Write project description"
                className="contact__form-input"
              ></textarea>
            </div>

            <button type="submit" className="button button--flex">
              Send Message
              <i class="uil uil-message"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
