import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Button from "../Button/Button";
import tick from "../../assets/tick.svg";
import "./ValidationCheck.css";

const ValidationCheck = () => {
  const [email, setEmail] = useState("");
  const token = sessionStorage.getItem("token");
  /**
   * Using Link caused some CSS problems, since it gets renered as "<a></a>"
   * So using useHistory() was a suitable choice
   */
  const history = useHistory();

  const handleClick = (path) => {
    sessionStorage.removeItem("token");
    history.push(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("checking");

    //TODO
  };

  return (
    <div className="validation">
      {!token || token === "" || token === undefined ? (
        <Redirect to="/login" />
      ) : (
        <h3>Check the Emails</h3>
      )}
      <form onSubmit={handleSubmit} className="check-mail">
        <input
          className="email-input"
          type="email"
          id="email"
          required
          autoComplete="off"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </form>
      <h4 className="enter">
        Press <a>Enter</a> to search
      </h4>
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
