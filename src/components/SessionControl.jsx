import React from 'react';

function SessionControl({ sessionLength, onIncrement, onDecrement }) {
  return (
    <div className="col-6 text-center">
      <h2 id="session-label">Session Length</h2>
      <div className="d-flex justify-content-center align-items-center">
        <button id="session-decrement" className="btn btn-secondary" onClick={onDecrement}>
          -
        </button>
        <span id="session-length" className="mx-3">
          {sessionLength}
        </span>
        <button id="session-increment" className="btn btn-secondary" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default SessionControl;
