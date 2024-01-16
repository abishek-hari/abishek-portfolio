import React from "react";
import HeroImg from "../../assets/Abishek-profile-v2.png";
import "./About.css";

const About = () => {
  return (
    <div className='container section about__container'>
      <div className='about__box'>
        <div className='about__title'>My Journey</div>
        <div className='about__info-container'>
          <div className='about__left'>
            <p className='about__desc'>
              I'm a 21-year old passionate frontend developer With a keen eye
              for intuitive design and a commitment to creating engaging user
              experiences.
            </p>
            <p className='about__desc'>
              I've worked with scripted language and frameworks and with
              consistency I have raised my standards for whats expected of any
              web application.
            </p>
            <p className='about__desc'>
              Through these experience, I've had the opportunity to create
              memorable products that are not only enjoyable to use but are
              written in code that's maintable and easy to understand.
            </p>
          </div>
          <div className='about__right'>
            <img src={HeroImg} alt='hero' className='about__img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
