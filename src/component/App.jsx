import React from "react";

import "../styles/App.css";
import Copyright from "./Copyright";
import Counter from "./Counter";
import Hallo from "./Hallo";

function App() {
  return (
    <div className="app-component">
      <header className="App-header">
        <Hallo name="Toto" />
        <Counter count={1} />
        <Copyright name="Layesall" link="www.layesall.com" />
      </header>
    </div>
  );
}

export default App;
