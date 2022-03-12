import React, {useState} from 'react';

function Counter() {
  
  const [counter, setCounter] = useState(0);

  const numberCounter = (flag) => {
    switch (flag) {
      case 'u':
        setCounter(counter + 1)
        break;
      case 'd':
        setCounter(counter - 1)
        break;
      default: 
        setCounter(0)
        break;
    }
  }

  return (
    <div className='counter-component'>
      <h2> { counter } </h2>

      <button title='Up' onClick={() => numberCounter('u') } >
        Up
      </button>
      <button title='Reset' onClick={() => numberCounter() } >
        Reset
      </button>
      <button title='Down' onClick={() => numberCounter('e') } >
        Down
      </button>
    </div>
  );
}

export default Counter;
