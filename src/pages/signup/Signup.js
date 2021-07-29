import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";

const Signup = () => {
  return (
    <div className="wrapper-signup">
      <Sidebar type="register" />
      <Main />
    </div>
  );
};

export default Signup;
