import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Info from "../Info/Info";
import ValidationCheck from "../ValidationCheck/ValidationCheck";

import "./Sidebar.css";

const Sidebar = ({ login }) => {


  return (
    <div className="sidebar-container">
      <Logo text="Auto Mail OSINT Tool" />
      <Form login={login} />
      <ValidationCheck />
      <Info />
    </div>
  );
};

export default Sidebar;
