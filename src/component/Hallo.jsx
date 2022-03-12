import React from 'react';
import '../styles/Hallo.css';

function Hallo(props) {

  return (
    <div className='hallo-component'>
      <span>Hallo, {props.name}</span>
      <h3>Welcome in Nikou-Counter</h3>
    </div>
  );
}

export default Hallo;
