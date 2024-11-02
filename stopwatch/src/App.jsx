import React, { useState, useRef } from "react";

const App = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [delayTime, setDelayTime] = useState(0);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / (1000 * 60 * 60)));
    const minutes = String(Math.floor((time / (1000 * 60)) % 60));
    const seconds = String(Math.floor((time / 1000) % 60));
    return `${hours}:${minutes}:${seconds}`;
  };

  const start = () => {
    if (!isRunning) {
      const startTime = Date.now() - elapsedTime;
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, delayTime * 1000);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const delay = (e) => {
    setDelayTime(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-4">Stopwatch</h1>
      <div className="mt-4">{formatTime(elapsedTime)}</div>
      <div>
        <input
          onChange={delay}
          className="border-2 border-black"
          type="number"
        />
        <label> seconds</label>
      </div>
      <div className="mt-4">
        <button
          disabled={isRunning ? true : false}
          className="mr-2 border-2 border-black bg-gray-300"
          onClick={start}
        >
          Start
        </button>
        <button
          disabled={isRunning ? false : true}
          className="mr-2 border-2 border-black bg-gray-300"
          onClick={stop}
        >
          Stop
        </button>
        <button
          disabled={isRunning ? false : true}
          className="mr-2 border-2 border-black bg-gray-300"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
