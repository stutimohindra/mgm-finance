import React from 'react';
import './HeaderMenuItems.css';
import mainLogo from '../../images/mainLogo.jpg';
import hamburger from '../../images/hamburger.svg';

const HeaderMenuItems = () => {
  return (
    <div className="HeaderContainer">
      <div className="Logo">
        <img
          src={mainLogo}
          alt="1"
        />
        <div className="DropDownMenu">
          <a href="#menu">
            <img
              src={hamburger}
              alt="1"
            />
          </a>
        </div>
      </div>
      <div className="HeaderMenuItems">
        <ul className="Menuitems">
          <li className="Items">Explore Loans</li>
          <li className="Items">Properties</li>
          <li className="Items">Services</li>
          <li className="Items">About Us</li>
        </ul>
      </div>
    </div>
  )
}
export default HeaderMenuItems;