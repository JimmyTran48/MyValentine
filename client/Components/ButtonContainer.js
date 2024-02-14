import React from 'react';

function ButtonContainer({ yes, no, count }) {
  return (
    <div id='Button'>
      <button id='Yes' onClick={yes}>
        Yes
      </button>
      <button
        id='No'
        onClick={no}
        className={count > 10 ? 'hide' : count > 6 ? 'move' : ''}
        disabled={count === 11}
      >
        No
      </button>
    </div>
  );
}

export default ButtonContainer;
