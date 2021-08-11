import React from "react";
import Logo from "../Logo/Logo";
import LoginForm from "../LoginForm/LoginForm";
import Info from "../Info/Info";
import ValidationCheck from "../ValidationCheck/ValidationCheck";
import "./Sidebar.css";
import RegisterForm from "../RegisterForm/RegisterForm";

const Sidebar = ({ type }) => {
  // page type checking for rendering correct component
  let isLogin = type === "login" ? true : false;
  let isRegister = type === "register" ? true : false;
  let isOsint = type === "osint" ? true : false;

  return (
    <div className="sidebar-container">
      {isLogin && (
        <>
          <Logo text="Auto Mail OSINT Tool" />
          <LoginForm />
          <div></div>
          <Info />
        </>
      )}
      {isRegister && (
        <>
          <Logo text="Auto Mail OSINT Tool" />
          <RegisterForm />
          <div></div>
        </>
      )}
      {isOsint && (
        <>
          <Logo text="Auto Mail OSINT Tool" />
          <ValidationCheck />
        </>
      )}
    </div>
  );
};

export default Sidebar;
