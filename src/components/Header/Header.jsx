import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__nav'>
        <Link to='/' className='header__logo'>
          A
        </Link>
        <a
          href='https://www.linkedin.com/in/abishekhari09/'
          className='header__link'
        >
          Collab
        </a>
      </div>
    </header>
  );
};

export default Header;
