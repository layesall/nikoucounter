import React from 'react';

function Hallo(props) {
  return (
    <div className='hallo-component'>
      <h3> Hallo, {props.name} </h3>
    </div>
  );
}

export default Hallo;
