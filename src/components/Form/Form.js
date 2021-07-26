import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";

const Form = ({ login }) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    login(userDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <Input
        type="email"
        id="email"
        placeholder="Email"
        onChange={(event) =>
          setUserDetails({ ...userDetails, email: event.target.value })
        }
        value={userDetails.email}
      />
      <Input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(event) =>
          setUserDetails({ ...userDetails, password: event.target.value })
        }
        value={userDetails.password}
      />
      <Button text="Continue" type="submit" onSubmit={handleSubmit} />
    </form>
  );
};

export default Form;
