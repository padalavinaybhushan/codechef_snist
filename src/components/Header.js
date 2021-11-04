import React from 'react';
import Navtemp from "./Navtemp";
import Model from "./Model";

const Header = () => {
  
  return (
    <div className="banner">
      <Navtemp/>
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Sreenidhi Club.</h3>
            <h1>CODE CHEF SNIST</h1>
            <p>
          
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <Model/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
