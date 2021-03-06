import React from "react";
import logo from "./assets/img/logo.svg";
import "./assets/css/App.css";

import CompenenteSession from "./components/session/logeo";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CompenenteSession></CompenenteSession>
        <Sidebar></Sidebar>
      </header>
    </div>
  );
}

export default App;
