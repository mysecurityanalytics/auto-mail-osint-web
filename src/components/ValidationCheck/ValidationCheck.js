import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Button from "../Button/Button";
import tick from "../../assets/tick.svg";
import Loader from "../Loader/Loader";
import "./ValidationCheck.css";

const ValidationCheck = () => {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [wrongFormat, setWrongFormat] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [showProvider, setShowProvider] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState(false);
  const [socials, setSocials] = useState([]);

  const token = sessionStorage.getItem("token");
  /**
   * Using Link caused some CSS problems, since it gets renered as "<a></a>"
   * So using useHistory() was a suitable choice
   */
  const history = useHistory();

  const handleClick = (path) => {
    // JWT Token gets removed when clicked on Logout button
    sessionStorage.removeItem("token");
    history.push(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Loaders start
    setLoading(true);
    setLoadingProvider(true);

    const resetErrors = () => {
      /**
       * Have to remove previous warnings in case of sequential searches
       */
      if (showError === true) {
        setShowError(!showError);
      }
      if (wrongFormat === true) {
        setWrongFormat(!wrongFormat);
      }
    };

    const opts = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    resetErrors();
    fetch(`https://internship-api.mysa.dev/scan/social/${email}`, opts)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 500) {
          // Internal Server Error
          if (showError === false) {
            setShowError(!showError);
          }
          setLoading(false); // Loader stops
          throw new Error("Promise Chain Cancelled");
        } else {
          // Wrong Email Format, 400
          setWrongFormat(true);
          setLoading(false); // Loader stops
          throw new Error("Promise Chain Cancelled");
        }
      })
      .then((data) => {
        setSocials([...data["social platforms"]]);
        setLoading(false); // Loader stops
      })
      .catch((error) => {
        setLoading(false); // Loader stops
        console.error("There's an error", error);
      });

    
    resetErrors();
    fetch(`https://internship-api.mysa.dev/scan/providers/${email}`, opts)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          // Domain not Found
          setLoadingProvider(false); // Loader stops
          return;
        } else if (res.status === 400) {
          setWrongFormat(true);
          setShowCheck(false);
          setLoadingProvider(false); // Loader stops
          throw new Error("Promise Chain Cancelled");
        } else {
          // Internal Server Error, 500
          setShowError(true);
          setLoadingProvider(false); // Loader stops
          throw new Error("Promise Chain Cancelled");
        }
      })
      .then((data) => {
        if (data !== undefined && showProvider === false) {
          setShowProvider(!showProvider);
        }
        if (data === undefined && showProvider === true) {
          setShowProvider(!showProvider);
        }
        setLoadingProvider(false); // Loader stops
      })
      .catch((error) => {
        setLoadingProvider(false); // Loader stops
        console.error("There's an error", error);
      });
    if (showCheck === false) {
      setShowCheck(!showCheck);
    }
  };

  return (
    <div className="validation">
      {!token || token === "" || token === undefined ? (
        <Redirect to="/login" />
      ) : (
        <h3>Check the Emails</h3>
      )}
      {showError && (
        <h4 className="error">
          Internal Server Error! Please, try again later.
        </h4>
      )}
      {wrongFormat && (
        <h4 className="error">Wrong Email Format! Enter a valid mail.</h4>
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
        Press <span className="enter">Enter</span> to search
      </h4>
      {showCheck ? (
        <>
          <div className="category">
            <h4>Social Check</h4>
            {loading && <Loader />}
            {!loading && socials.length > 0
              ? socials.map((social, index) => (
                  <div className="checker" key={index}>
                    <h4>{social}</h4>
                    <img src={tick} alt="ticked" />
                  </div>
                ))
              : !loading && (
                  <p>
                    <span id="no-domain">No account found!</span> <br /> <br />
                    The email you've entered is not registered to any of given
                    social media sites.
                  </p>
                )}
          </div>
          <div className="category">
            <h4>Provider Check</h4>
            {loadingProvider && <Loader />}
            {!loadingProvider && showProvider ? (
              <p>
                <span id="found-domain">Domain found!</span> <br /> <br />
                The email you've entered uses one of the given mailbox providers
              </p>
            ) : (
              !loadingProvider && (
                <p>
                  <span id="no-domain">Domain not found!</span> <br /> <br />
                  The email you've entered doesn't use any of the given mailbox
                  providers.
                </p>
              )
            )}
          </div>
        </>
      ) : (
        <>
          <div className="category">
            <h4>Social Check</h4>
            <p>
              Checks if an email is registered to given social media sites:{" "}
              <br />
              <br /> <span>Twitter, Instagram, Tumblr, Spotify</span>
            </p>
          </div>
          <div className="category">
            <h4>Provider Check</h4>
            <p>
              Checks if an email uses given mailbox providers: <br />
              <br />{" "}
              <span id="provider">yaani.com, gmail.com, protonmail.com</span>
            </p>
          </div>
        </>
      )}
      <Button
        text="Logout"
        buttonType="btn btn-danger btn-osint"
        onClick={() => handleClick("/login")}
      />
    </div>
  );
};

export default ValidationCheck;
