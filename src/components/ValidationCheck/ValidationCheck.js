import React from "react";
import "./ValidationCheck.css";
import Button from "../Button/Button";
import tick from "../../assets/tick.svg";
import { useHistory } from "react-router-dom";

const ValidationCheck = () => {
  /**
   * Using Link caused some CSS problems, since it gets renered as "<a></a>"
   * So using useHistory() was a suitable choice
   */
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div className="validation">
      <h3>Sign Up</h3>
      <div className="checker">
        <h4>OSINT Operation 1</h4>
        <img src={tick} alt="ticked" />
      </div>
      <div className="checker">
        <h4>OSINT Operation 2</h4>
        <div className="status-info status-checking"></div>
      </div>
      <div className="checker">
        <h4>OSINT Operation 3</h4>
        <div className="status-info status-rejected"></div>
      </div>
      <div className="checker">
        <h4>OSINT Operation 4</h4>
        <div className="unchecked"></div>
      </div>
      <Button
        text="Logout"
        buttonType="btn btn-danger btn-lg"
        onClick={() => handleClick("/login")}
      />
    </div>
  );
};

export default ValidationCheck;
