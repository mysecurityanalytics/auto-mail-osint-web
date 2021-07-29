import React from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Osint from "./pages/osint/Osint";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  // TODO
  let loggedIn = false;

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/osint" component={Osint} />
          <Route exact path="/">
            {loggedIn ? <Redirect to="/osint" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
