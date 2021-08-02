import React from "react";
import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./LoginForm.css";

const LoginForm = () => {
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const history = useHistory();

  const osintRedirect = (path) => {
    history.push(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const opts = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch("https://internship-api.mysa.dev/auth/login/", opts)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setShowError(!showError);
          throw new Error("Promise Chain Cancelled");
        }
      })
      .then((data) => {
        sessionStorage.setItem("token", data.token); 
        osintRedirect("/osint");
      })
      .catch((error) => {
        console.error("There's an error", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {token && token !== "" && token !== undefined ? (
        <Redirect to="/osint" />
      ) : (
        <h3>Login</h3>
      )}
      {showError && <h4 className="alert-text">Invalid Email or Password!</h4>}
      <Input
        type="email"
        id="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <Input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
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
