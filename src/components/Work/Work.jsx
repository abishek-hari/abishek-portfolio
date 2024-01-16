import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";
import { projects } from "../../data";
import { FaAngleDoubleRight } from "react-icons/fa";

const Work = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className='container section work__container'>
      <h2 className='work__title'>
        What I've been <span>working on </span>
      </h2>
      <p className='work__desc'>
        I've been dedicating my time to building pratical project and my focus
        has been on honing my skills in frontend development, with a passion for
        creating user-friendly interfaces.
      </p>
      <div className='work__box'>
        {projects.map((project) => {
          const { id, img, title, desc } = project;
          return (
            <div className='work__card' key={id}>
              <div className='work-img-container'>
                <img src={img} alt={title} className='work__img' />
              </div>
              <div className='work__info'>
                <h2 className='work__info-title'>{title}</h2>
                <p className='work__info-desc'>{desc}</p>
                <Link
                  to={`/project/${id}`}
                  className='work__btn'
                  onClick={scrollToTop}
                >
                  view Details <FaAngleDoubleRight className='fa__arrow' />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
