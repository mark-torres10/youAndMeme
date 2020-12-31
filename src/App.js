import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        Hello World!
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            exact
            path="/profile"
            component={ProfilePage}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
