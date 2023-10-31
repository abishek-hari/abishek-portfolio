import React, { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import HeroImgs from "../../assets/abishek-linkedIn-profile.png";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container section hero__container'>
      <div className='hero__info-container'>
        <div className='hero__icons'>
          <div className='hero__bar'></div>
          <div className='hero__icon'>
            <AiFillGithub />
            <AiFillLinkedin />
            <BiLogoGmail />
          </div>
        </div>
        <div className='hero__info'>
          <h2 className='hero__name'>Hi👋, I'm Abishek</h2>
          <h2 className='hero__designation'>
            Front End <span>Developer</span>
          </h2>
          <p className='hero__desc'>
            A Passionate frontend developer with a strong focus on intuitive
            design and engaging user experiences.
          </p>
        </div>
      </div>
      <div className='hero__img'>
        <img src={HeroImgs} alt='HeroImg' className='hero__main-img' />
      </div>
    </div>
  );
};

export default Hero;
