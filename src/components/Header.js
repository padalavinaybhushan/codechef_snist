import React from "react";
import Navtemp from "./Navtemp";
const Header = () => {
  return (
    <div className="banner">
      <Navtemp/>
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Srineedhi Club.</h3>
            <h1>CODE CHEF SNIST</h1>
            <p>
          
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                PLAY VEDIO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
