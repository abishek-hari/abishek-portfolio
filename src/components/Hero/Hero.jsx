import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import HeroImg from "../../assets/Abishek-profile-v1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className='container section hero__container'>
      <div className='hero__info-container'>
        <div className='hero__info'>
          <h2 className='hero__name'>
            Hi👋, I'm Abishek
            <span>.</span>
          </h2>
          <h2 className='hero__designation'>
            Front-End <span>Developer</span>.
          </h2>
          <p className='hero__desc'>
            A Passionate frontend developer With a keen eye for intuitive design
            and a commitment to creating engaging user experiences.
          </p>
        </div>
        <div className='hero__icons'>
          <div className='hero__bar'></div>
          <div className='hero__icon'>
            <a
              href='https://github.com/abishek-hari'
              target='_blank'
              className='icon-link'
            >
              <AiFillGithub className='hero-icon-sm' />
            </a>
            <a
              href='https://www.linkedin.com/in/abishekhari09/'
              target='_blank'
              className='icon-link'
            >
              <AiFillLinkedin className='hero-icon-sm' />
            </a>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=abishekhari09@gmail.com'
              target='_blank'
              className='icon-link'
            >
              <BiLogoGmail className='hero-icon-sm' />
            </a>
          </div>
        </div>
      </div>
      <div className='hero__img'>
        <img src={HeroImg} alt='HeroImg' className='hero__main-img' />
      </div>
    </div>
  );
};

export default Hero;
