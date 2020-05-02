import React from 'react';
import './HeaderMenuItems.css';
import mainLogo from '../../images/mainLogo.jpg';

const HeaderMenuItems = () => {
  return (
    <div className="HeaderContainer">
      <div className="Logo">
        <img
          src={mainLogo}
          alt="1"
        />
      </div>
      <div className="HeaderMenuItems">
        <ul className="Menuitems">
          <li className="Items">
            <a className="hyperLink" href="#Emi-calculator">
              Explore Loans
            </a>
          </li>
          <li className="Items">
            <a className="hyperLink" href="#ServicesContainer">
              Services
            </a>
          </li>
          <li className="Items"><a className="hyperLink" href="#customer-review">
            About Us
            </a></li>
        </ul>
      </div>
    </div >
  )
}
export default HeaderMenuItems;