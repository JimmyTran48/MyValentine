import React from 'react';

function ButtonContainer({ yes, no }) {
  return (
    <div id='Button'>
      <button id='Yes' onClick={yes}>
        Yes
      </button>
      <button id='No' onClick={no} onMouseOver={() => {}}>
        No
      </button>
    </div>
  );
}

export default ButtonContainer;
