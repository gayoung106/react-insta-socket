import React from "react";
import "./navbar.css";
import Notification from "../../img/notification.png";
import Message from "../../img/message.png";
import Settings from "../../img/settings.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Gayoung App</span>
      <div className="icons">
        <div className="icon">
          <img src={Notification} className="IconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Message} className="IconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Settings} className="IconImg" alt="" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
