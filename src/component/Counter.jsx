import React, {useState} from 'react';

function Counter(props) {
  
  const [counter, setCounter] = useState(0);

  const numberCounter = (flag) => {
    switch (flag) {
      case 'u':
        setCounter(counter + props.count)
        break;
      case 'd':
        setCounter(counter - props.count)
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
      <button title='Down' onClick={() => numberCounter('d') } >
        Down
      </button>
    </div>
  );
}

export default Counter;
