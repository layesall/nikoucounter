import React from 'react';

import '../styles/App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="app-component">
      <header className="App-header">
        <h1>Nikou-Counter</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;