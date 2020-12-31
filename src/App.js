import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Hello World!
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.fragment>
              <NavBar />
              <HomePage />
            </React.fragment>
          )}
        />
        {/*
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        */}
      </Switch>
    </div>
  );
}

export default App;
