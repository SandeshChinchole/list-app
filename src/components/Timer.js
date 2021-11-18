import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer-group">
      <h3>Timer</h3>
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button 
          type="button"
          className={`btn btn-default-${isActive ? 'active' : 'inactive'}`} 
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          type="button"
          className="btn btn-default" 
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;