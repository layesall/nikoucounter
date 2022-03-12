import React from 'react';

import '../styles/App.css';
import Counter from './Counter';
import Hallo from './Hallo';

function App() {
  return (
    <div className="app-component">
      <header className="App-header">
        <Hallo name="Toto" />
        <h1>Welcome in Nikou-Counter</h1>
        <Counter count={1} />
      </header>
    </div>
  );
}

export default App;