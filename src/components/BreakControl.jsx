import React from 'react';

function BreakControl({ breakLength, onIncrement, onDecrement }) {
  return (
    <div className="col-6 text-center">
      <h2 id="break-label">Break Length</h2>
      <div className="d-flex justify-content-center align-items-center">
        <button id="break-decrement" className="btn btn-secondary" onClick={onDecrement}>
          -
        </button>
        <span id="break-length" className="mx-3">
          {breakLength}
        </span>
        <button id="break-increment" className="btn btn-secondary" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default BreakControl;
