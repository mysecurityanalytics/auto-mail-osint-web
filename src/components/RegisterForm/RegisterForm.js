import React from "react";
import { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = sessionStorage.getItem("token");
  const history = useHistory();

  const loginRedirect = (path) => {
    history.push(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Loader start
    setLoading(true);

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
    fetch("https://internship-api.mysa.dev/auth/register/", opts)
      .then((res) => {
        if (res.status === 200) {
          if (showError === true) {
            setShowError(!showError);
          }
          return res.json();
        } else if (res.status === 409) {
          if (showError === false) {
            setShowError(!showError);
          }
          setLoading(false); // Loader stops
          throw new Error("Promise Chain Cancelled");
        } else {
          throw new Error("Promise Chain Cancelled");
        }
      })
      .then(() => {
        setLoading(false); // Loader stops
        setShowSuccess(!showSuccess);
        setTimeout(() => {
          loginRedirect("/login");
        }, 1000);
      })
      .catch((error) => {
        console.error("There's an error", error);
      });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      {token && token !== "" && token !== undefined ? (
        <Redirect to="/osint" />
      ) : (
        <h3>Sign Up</h3>
      )}
      {showError && (
        <h4 className="alert-text">Email is Already Registered!</h4>
      )}
      {showSuccess && (
        <h4 className="success-text">You Can Now Login to Our System</h4>
      )}
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
        text="Register"
        type="submit"
        buttonType="btn btn-success"
        onSubmit={handleSubmit}
      />
      {loading && <Loader />}
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
