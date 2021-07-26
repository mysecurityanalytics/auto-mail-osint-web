import React from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  // just for testing before back-end implementation
  const mockUser = {
    email: "mysa@mysa.tc",
    password: "mysa",
  };

  const login = (loginDetails) => {
    if (loginDetails.email !== mockUser.email) {
      alert("Invalid Email!");
    }

    if (loginDetails.password !== mockUser.password) {
      alert("Invalid Password!");
    }

    if (
      loginDetails.email === mockUser.email &&
      loginDetails.password === mockUser.password
    ) {
      console.log("Succesfully logged-in");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Sidebar login={login} />
        <Main />
      </div>
    </div>
  );
};

export default App;
