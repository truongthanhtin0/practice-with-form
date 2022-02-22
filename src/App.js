import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import AuthenLayout from "./layouts/AuthenLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import history from "./util/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />

          <AuthenLayout exact path="/login" component={Login} />
          <AuthenLayout exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
