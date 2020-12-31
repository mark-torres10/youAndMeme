import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            exact
            path="/profile"
            component={ProfilePage}
          ></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route
            path="/create-account"
            component={CreateAccountPage}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
