import React from "react";
import "./App.css";

// Components
import Header from "./components/header_footer/Header";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Homepage />
    </React.Fragment>
  );
}

export default App;
