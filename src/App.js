import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Components
import Header from "./components/header_footer/Header";
import Homepage from "./pages/homepage/Homepage";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
