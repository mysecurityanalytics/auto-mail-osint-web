import React from "react";
import { useHistory } from "react-router";
import Logo from "../Logo/Logo";
import LoginForm from "../LoginForm/LoginForm";
import Info from "../Info/Info";
import logout from "../../assets/log-out.svg";
import ValidationCheck from "../ValidationCheck/ValidationCheck";
import RegisterForm from "../RegisterForm/RegisterForm";
import "./Sidebar.css";

const Sidebar = ({ type }) => {
  const history = useHistory();

  // page type checking for rendering correct component
  let isLogin = type === "login" ? true : false;
  let isRegister = type === "register" ? true : false;
  let isOsint = type === "osint" ? true : false;

  const handleClick = (path) => {
    // JWT Token gets removed when clicked on Logout button
    sessionStorage.removeItem("token");
    history.push(path);
  };

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
          <div className="logoutContainer" onClick={() => handleClick("/login")}><div className="logout-text">Log Out</div><img src={logout} alt="Log Out" /></div>
          <Logo text="Auto Mail OSINT Tool" />
          <ValidationCheck />
        </>
      )}
    </div>
  );
};

export default Sidebar;
