import React from "react";
import "./Skills.css";

import Javascript from "../../assets/js.png";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import react from "../../assets/react.png";
import styledComponent from "../../assets/styled-components.png";
import git from "../../assets/github.png";
import redux from "../../assets/redux-toolkit.png";
import tailwind from "../../assets/tailwind-css.png";

const Skills = () => {
  return (
    <div className='container section skills__container'>
      <h2 className='skill__title'>
        My <span> Skills</span>
      </h2>
      <p className='skill__desc'>
        Through my studies, I've gained solid understanding of computer science
        and frontend development concepts, and have dedicated a lot of my free
        time to apply these concepts to real-world scenarios and applications.
      </p>
      <div className='skills__box'>
        <ul className='skill__info'>
          <div className='skills__name'>
            <div className='icon__wrapper'>
              <img src={Javascript} alt='icon' className='skill-icon' />
            </div>
            <li className='skills'>Javascript</li>
          </div>
          <div className='skills__name'>
            <div className='icon__wrapper'>
              <img src={react} alt='icon' className='skill-icon' />
            </div>
            <li className='skills'>react</li>
          </div>
          <div className='skills__name'>
            <div className='icon__wrapper'>
              <img src={redux} alt='icon' className='skill-icon' />
            </div>
            <li className='skills'>Redux toolkit</li>
          </div>
          <div className='skills__name'>
            <div className='icon__wrapper'>
              <img src={tailwind} alt='icon' className='skill-icon' />
            </div>
            <li className='skills'>Tailwind css</li>
          </div>
          <div className='skills__name'>
            <div className='icon__wrapper'>
              <img src={styledComponent} alt='icon' className='skill-icon' />
            </div>
            <li className='skills'>styled Componets</li>
          </div>
          <div className='skills__name'>
            <div className='icon__wrapper'>
              <img src={html} alt='icon' className='skill-icon' />
            </div>
            <li className='skills'>Html</li>
          </div>
          <div className='skills__name'>
            <div className='icon__wrapper'>
              <img src={css} alt='icon' className='skill-icon' />
            </div>
            <li className='skills'>css</li>
          </div>
          <div className='skills__name'>
            <div className='icon__wrapper'>
              <img src={git} alt='icon' className='skill-icon' />
            </div>
            <li className='skills'>Git</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
