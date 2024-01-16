import React from "react";
import "./Skills.css";
import { FaReact, FaCss3 } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiStyledcomponents,
} from "react-icons/si";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";

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
            <SiJavascript className='skill-icon' />
            <li className='skills'>Javascript</li>
          </div>
          <div className='skills__name'>
            <FaReact className='skill-icon' />
            <li className='skills'>react</li>
          </div>
          <div className='skills__name'>
            <SiRedux className='skill-icon' />
            <li className='skills'>Redux toolkit</li>
          </div>

          <div className='skills__name'>
            <SiTailwindcss className='skill-icon' />
            <li className='skills'>Tailwind css</li>
          </div>
          <div className='skills__name'>
            <SiStyledcomponents className='skill-icon' />
            <li className='skills'>styled Componets</li>
          </div>

          <div className='skills__name'>
            <AiOutlineHtml5 className='skill-icon' />
            <li className='skills'>Html</li>
          </div>
          <div className='skills__name'>
            <FaCss3 className='skill-icon' />
            <li className='skills'>css</li>
          </div>
          <div className='skills__name'>
            <AiFillGithub className='skill-icon' />
            <li className='skills'>Git</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
