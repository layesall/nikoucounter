import React, {useState} from 'react';

import '../styles/Counter.css';

function Counter(props) {
  
  const [counter, setCounter] = useState(0);

  return (
    <div className='counter-component'>
      <h2> { counter } </h2>

      <button title='Up' onClick={() => setCounter(counter + props.count) } >
        Up
      </button>
      <button title='Reset' onClick={() => setCounter(0) } >
        Reset
      </button>
      <button title='Down' onClick={() => setCounter(counter - props.count) } >
        Down
      </button>
    </div>
  );
}

export default Counter;
