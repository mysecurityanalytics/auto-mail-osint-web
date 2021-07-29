import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("register");

    // TODO
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
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
        text="Register"
        type="submit"
        buttonType="btn btn-success"
        onSubmit={handleSubmit}
      />
      <h4>
        Already have an account?{" "}
        <Link className="link-1" to="/login">
          Login
        </Link>{" "}
      </h4>
      <p className="register-text">
        By signing up, I agree to the Privacy Policy <br /> and Terms of Service
      </p>
    </form>
  );
};

export default RegisterForm;
