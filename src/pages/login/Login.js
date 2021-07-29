import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";

const Login = () => {
  return (
    <div className="wrapper">
      <Sidebar type="login" />
      <Main />
    </div>
  );
};

export default Login;
