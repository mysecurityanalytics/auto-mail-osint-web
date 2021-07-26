import React from "react";
import logo from "../../assets/logo.svg";
import "./Logo.css";

const Logo = ({ text }) => {
  return (
    <div className="logo">
      <img src={logo} alt="logo"></img>
      <h3>{text}</h3>
    </div>
  );
};

export default Logo;
