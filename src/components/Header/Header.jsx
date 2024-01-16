import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__nav'>
        <div className='logo__container'>
          <Link to='/' className='header__logo'>
            A
          </Link>
          <Link to='/' className='header__logo-1'>
            B
          </Link>
          <Link to='/' className='header__logo-2'>
            I
          </Link>
        </div>
        <a
          href='https://drive.google.com/file/d/1G3WWa56D5fsZIn5K79g6AKMmEMZ-Q9N2/view?usp=drive_link'
          target='_blank'
          className='header__link'
        >
          RESUME
        </a>
      </div>
    </header>
  );
};

export default Header;
