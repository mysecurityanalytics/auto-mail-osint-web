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
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/signup" render={(props) => <Signup {...props} />} />
          <Route path="/osint" render={(props) => <Osint {...props} />} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
