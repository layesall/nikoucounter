import React from 'react';

import '../styles/App.css';
import Counter from './Counter';
import Hallo from './Hallo';

function App() {
  return (
    <div className="app-component">
      <header className="App-header">
        <Hallo name="Toto" />
        <Counter count={1} />
      </header>
    </div>
  );
}

export default App;