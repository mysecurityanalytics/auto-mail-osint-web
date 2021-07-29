import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./LoginForm.css";

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login");

    // TODO
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
      <Button
        text="Continue"
        type="submit"
        buttonType="btn"
        onSubmit={handleSubmit}
      />
      <h4>
        Don’t have an account?{" "}
        <Link className="link-2" to="/signup">
          Sign Up
        </Link>{" "}
      </h4>
    </form>
  );
};

export default LoginForm;
