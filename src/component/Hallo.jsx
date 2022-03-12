import React from 'react';

function Hallo(props) {

  return (
    <div className='hallo-component'>
      <p>Hallo, {props.name}</p>
    </div>
  );
}

export default Hallo;
