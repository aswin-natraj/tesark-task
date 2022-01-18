import React from "react";
import "./Header.css";
<script
  src="https://kit.fontawesome.com/31e630ddae.js"
  crossorigin="anonymous"
></script>;

const Header = () => {
  return (
    <div className="container">
      <div className="menu-tab">
        <div className="logo-div">
          <i class="fas fa-utensils"></i>
          <p>FINDTABLE</p>
        </div>
        <ul className="header-lists">
          <li className="header-list-item">
            <a href="#">HOME</a>
          </li>
          <li className="header-list-item">
            <a href="#">RESTAURANT</a>
          </li>
          <li className="header-list-item">
            <a href="#">HOW IT WORKS</a>
          </li>
          <li className="header-list-item">
            <a href="#">PAGE</a>
          </li>
          <li className="header-list-item">
            <a href="#">LIST YOUR RESTAURANT</a>
          </li>
        </ul>
      </div>
      <div className="login-menu">
        <ul className="login-memu-list">
          <li className="login-menu-list-item">
            <a href="#">
              <i class="fas fa-dollar-sign"></i>Dollar
            </a>
          </li>
          <li className="login-menu-list-item">
            <a href="#">
              <i class="fas fa-globe-asia"></i>English
            </a>
          </li>
          <li className="login-menu-list-item active">
            <a href="#">SIGN UP/IN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
