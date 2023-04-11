import React, { useEffect, useState } from 'react';
import { getPadTime } from './helpers/getPadTime';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(7 * 60);
  const [isCounting, setIsCounting] = useState(false);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);

    if (timeLeft === 0) setIsCounting(false);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(5 * 60);
    setIsCounting(true);
  };
  const handleStop = () => {
    setIsCounting(false);
  };
  const handleReset = () => {
    setIsCounting(false);
    setTimeLeft(7 * 60);
  };

  return (
    <>
      <div className="timer_container">
        <div className="timer">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
        <div className="buttons">
          {isCounting ? (
            <button onClick={handleStop}>Stop</button>
          ) : (<button onClick={handleStart}>Start</button>)}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
