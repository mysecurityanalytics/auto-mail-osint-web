import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";

const Osint = () => {
  return (
    <div className="wrapper-osint">
      <Sidebar type="osint" />
      <Main />
    </div>
  );
};

export default Osint;
