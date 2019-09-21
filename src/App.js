import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Components
import Header from "./components/header_footer/Header";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/shop";
import SignIn_Up from "./pages/signIn-signUp/signIn_signUp";

function App() {
  return (
    <div
      style={{
        marginTop: "100px"
      }}
    >
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signIn" component={SignIn_Up} />
      </Switch>
    </div>
  );
}

export default App;
