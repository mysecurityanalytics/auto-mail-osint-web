import React from "react";
import Status from "../Status/Status";
import "./Input.css";

const Input = ({ type, id, placeholder, onChange, value }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required
        autoComplete="off"
        onChange={onChange}
        value={value}
      ></input>
      <Status />
    </div>
  );
};

export default Input;
