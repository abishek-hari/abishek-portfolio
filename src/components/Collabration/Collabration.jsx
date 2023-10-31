import React from "react";
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
        <a
          href='https://www.linkedin.com/in/abishekhari09/'
          className='collab__mail'
        >
          @AbishekHari
        </a>
      </div>
    </div>
  );
};

export default Collabration;
