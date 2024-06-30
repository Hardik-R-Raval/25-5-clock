import React from 'react';

function Timer({ timerLabel, timeLeft, isRunning, onStartStop, onReset }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="text-center mt-4">
      <h2 id="timer-label">{timerLabel}</h2>
      <div id="time-left" className="display-4">
        {formatTime(timeLeft)}
      </div>
      <div className="mt-3">
        <button id="start_stop" className="btn btn-primary mx-2" onClick={onStartStop}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button id="reset" className="btn btn-danger mx-2" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
