import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import RegisterUser from "./account/RegisterUser";
import "./App.css";
import SignIn from "./account/SignIn";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={SignIn} />
        <Route path="/register-user" component={RegisterUser} />
      </div>
    </Router>
  );
}
export default App;
