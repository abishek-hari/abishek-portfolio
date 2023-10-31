import React from "react";
import "./Footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='container section footer__container'>
      <div className='footer__row'>
        <div className='footer__logo'>@bishek</div>
        <div className='footer__links'>
          <div className='footer__icons'>
            <AiFillGithub className='icon' />
            <a href='https://github.com/abishek-hari'>github</a>
          </div>
          <div className='footer__icons'>
            <AiFillLinkedin className='icon' />
            <a href='https://www.linkedin.com/in/abishekhari09/'>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
