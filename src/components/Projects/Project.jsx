import React from "react";
import "./project.css";
import { Data } from "./Data";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Projects = () => {
  return (
    <>
      <section className="testimonial__container section" id="projects">
        <h2 className="section__title"> Project</h2>
        <span className="section__subtitle">my projects</span>

        {/* <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="testimonial__container"
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__image" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
        <div className="project__container container">
          {Data.map(
            ({ title, description, coverUrl, demoLink, sourceLink }) => {
              return (
                <div className="project__card">
                  <img src={coverUrl} alt="" className="project__card__image" />
                  <h3 className="project__title">{title}</h3>
                  <p className="project__description">{description}</p>
                  <div className="project__card__Links">
                    <a href={demoLink} target="_blank" rel="noreferrer">
                      view
                    </a>
                    <a href={sourceLink} target="_blank" rel="noreferrer">
                      source code
                    </a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
