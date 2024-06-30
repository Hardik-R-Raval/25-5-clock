import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (timeLeft === 0) {
      const audio = document.getElementById('beep');
      audio.play();
      if (timerLabel === 'Session') {
        setTimerLabel('Break');
        setTimeLeft(breakLength * 60);
      } else {
        setTimerLabel('Session');
        setTimeLeft(sessionLength * 60);
      }
    }
  }, [timeLeft, timerLabel, breakLength, sessionLength]);

  const decrementBreak = () => {
    if (!isRunning && breakLength > 1) setBreakLength(breakLength - 1);
  };

  const incrementBreak = () => {
    if (!isRunning && breakLength < 60) setBreakLength(breakLength + 1);
  };

  const decrementSession = () => {
    if (!isRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
    }
  };

  const incrementSession = () => {
    if (!isRunning && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const startStopTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      setIntervalId(newIntervalId);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(1500);
    setTimerLabel('Session');
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div id="clock">
      <h1 className="text-center">25 + 5 Clock</h1>
      <div className="row my-4">
        <div className="col-md-6 text-center">
          <h2 id="break-label">Break Length</h2>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary m-2" id="break-decrement" onClick={decrementBreak}>-</button>
            <h3 id="break-length">{breakLength}</h3>
            <button className="btn btn-primary m-2" id="break-increment" onClick={incrementBreak}>+</button>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <h2 id="session-label">Session Length</h2>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary m-2" id="session-decrement" onClick={decrementSession}>-</button>
            <h3 id="session-length">{sessionLength}</h3>
            <button className="btn btn-primary m-2" id="session-increment" onClick={incrementSession}>+</button>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <h2 id="timer-label">{timerLabel}</h2>
        <h1 id="time-left">{formatTime(timeLeft)}</h1>
      </div>
      <div className="text-center my-4">
        <button className="btn btn-success m-2" id="start_stop" onClick={startStopTimer}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className="btn btn-danger m-2" id="reset" onClick={resetTimer}>Reset</button>
      </div>
      <audio id="beep" src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"></audio>
    </div>
  );
}

export default Clock;
