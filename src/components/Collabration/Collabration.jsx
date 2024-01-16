import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import "./Collabration.css";

const Collabration = () => {
  return (
    <div className='container collab__container'>
      <div className='collab__info'>
        <h2 className='collab__title'>
          Let's build something <span>together</span>
        </h2>
        <p className='collab__desc'>
          Feel free to reach out if you're looking for a developer,have a
          question,or just want to connect
        </p>
        <div className='collab-links'>
          <div className='collab-link'>
            <AiFillGithub />
            <a
              href='https://github.com/abishek-hari'
              target='_blank'
              className='link'
            >
              github
            </a>
          </div>
          <div className='collab-link'>
            <AiFillLinkedin />
            <a
              href='https://www.linkedin.com/in/abishekhari09/'
              target='_blank'
              className='link'
            >
              LinkedIn
            </a>
          </div>
          <div className='collab-link'>
            <BiLogoGmail />
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=abishekhari09@gmail.com'
              target='_blank'
              className='link'
            >
              Gmail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collabration;
